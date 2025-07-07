import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	try {
		const currentUrl = new URL(request.url);
		const baseUrl = `${currentUrl.protocol}//${currentUrl.host}`;

		// Перенаправляем на GitHub OAuth endpoint
		const githubAuthUrl = `${baseUrl}/api/auth/github`;

		console.log('Auth endpoint called, redirecting to:', githubAuthUrl);

		return NextResponse.redirect(githubAuthUrl);
	} catch (error) {
		console.error('Error in auth endpoint:', error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}

export async function POST(request: NextRequest) {
	try {
		const currentUrl = new URL(request.url);
		const baseUrl = `${currentUrl.protocol}//${currentUrl.host}`;

		// Для POST запросов также перенаправляем на GitHub
		const githubAuthUrl = `${baseUrl}/api/auth/github`;

		console.log('Auth POST endpoint called, redirecting to:', githubAuthUrl);

		return NextResponse.redirect(githubAuthUrl);
	} catch (error) {
		console.error('Error in auth POST endpoint:', error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
} 