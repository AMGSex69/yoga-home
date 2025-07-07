import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	console.log('=== AUTH CALLBACK START ===');

	const { searchParams } = new URL(request.url);
	const code = searchParams.get('code');
	const error = searchParams.get('error');

	console.log('Code:', code);
	console.log('Error:', error);

	if (error) {
		console.log('GitHub OAuth error:', error);
		return NextResponse.redirect(new URL('/admin?error=' + error, request.url));
	}

	if (!code) {
		console.log('Missing code parameter');
		return NextResponse.redirect(new URL('/admin?error=missing_code', request.url));
	}

	try {
		const clientId = process.env.CLIENT_ID;
		const clientSecret = process.env.CLIENT_SECRET;

		console.log('Client ID exists:', !!clientId);
		console.log('Client Secret exists:', !!clientSecret);

		if (!clientId || !clientSecret) {
			console.log('Missing GitHub OAuth credentials');
			return NextResponse.redirect(new URL('/admin?error=missing_credentials', request.url));
		}

		const currentUrl = new URL(request.url);
		const redirectUri = `${currentUrl.origin}/api/auth/callback`;

		console.log('Redirect URI:', redirectUri);

		// Обмениваем code на access_token
		const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				client_id: clientId,
				client_secret: clientSecret,
				code: code,
				redirect_uri: redirectUri,
			}),
		});

		console.log('Token response status:', tokenResponse.status);

		if (!tokenResponse.ok) {
			console.log('Token response not ok:', tokenResponse.status, tokenResponse.statusText);
			return NextResponse.redirect(new URL('/admin?error=token_failed', request.url));
		}

		const tokenData = await tokenResponse.json();
		console.log('Token data keys:', Object.keys(tokenData));

		if (tokenData.access_token) {
			console.log('Got access token, redirecting to admin with token');

			// Простое перенаправление на админ-панель с токеном
			const adminUrl = new URL('/admin', currentUrl.origin);
			adminUrl.searchParams.set('access_token', tokenData.access_token);

			return NextResponse.redirect(adminUrl);
		} else {
			console.log('No access token in response:', tokenData);
			return NextResponse.redirect(new URL('/admin?error=no_token', request.url));
		}
	} catch (error) {
		console.error('GitHub OAuth error:', error);
		return NextResponse.redirect(new URL('/admin?error=auth_failed', request.url));
	}
}

export async function POST(request: NextRequest) {
	// Обработка POST запросов от GitHub OAuth
	try {
		const body = await request.json();
		console.log('POST GitHub OAuth callback:', body);
		return NextResponse.json({ success: true });
	} catch (error) {
		console.error('POST GitHub OAuth error:', error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
} 