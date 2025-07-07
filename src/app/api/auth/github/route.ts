import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	// Перенаправляем на GitHub для авторизации
	const clientId = process.env.CLIENT_ID;

	if (!clientId) {
		console.error('CLIENT_ID не установлен');
		return NextResponse.json({ error: 'CLIENT_ID не установлен' }, { status: 500 });
	}

	// Автоматически определяем текущий URL из запроса
	const currentUrl = new URL(request.url);
	const redirectUri = `${currentUrl.origin}/api/auth/callback`;

	const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo`;

	console.log('GitHub OAuth: Redirecting to GitHub with client_id:', clientId);
	console.log('GitHub OAuth: Redirecting to GitHub with callback URL:', redirectUri);

	return NextResponse.redirect(githubAuthUrl);
}

export async function POST() {
	// Обработка POST запросов от CMS
	return NextResponse.json({ error: 'Method not implemented' }, { status: 501 });
}