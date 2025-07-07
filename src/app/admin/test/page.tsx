export default function TestAuth() {
	return (
		<div className="p-8">
			<h1 className="text-2xl font-bold mb-4">Тест авторизации GitHub</h1>

			<div className="space-y-4">
				<p>Для тестирования авторизации:</p>

				<a
					href="/api/auth/github"
					className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Авторизоваться через GitHub
				</a>

				<div className="mt-4 p-4 bg-gray-100 rounded">
					<h2 className="font-bold">Настройка переменных среды:</h2>
					<p>Добавьте в настройки Vercel:</p>
					<ul className="list-disc pl-6 mt-2">
						<li>GITHUB_CLIENT_ID: ваш Client ID</li>
						<li>GITHUB_CLIENT_SECRET: ваш Client Secret</li>
						<li>NEXT_PUBLIC_URL: URL вашего сайта</li>
					</ul>
				</div>
			</div>
		</div>
	);
} 