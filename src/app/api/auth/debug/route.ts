import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	const currentUrl = new URL(request.url);
	const dynamicRedirectUri = `${currentUrl.origin}/api/auth/callback`;

	const debug = {
		clientId: process.env.GITHUB_CLIENT_ID ? '✅ Найден' : '❌ Не найден',
		clientSecret: process.env.GITHUB_CLIENT_SECRET ? '✅ Найден' : '❌ Не найден',
		staticUrl: process.env.NEXT_PUBLIC_URL || '❌ Не используется',
		dynamicUrl: dynamicRedirectUri,
		currentUrl: request.url,
		timestamp: new Date().toISOString()
	};

	return NextResponse.json(debug);
} 