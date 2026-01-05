Laravel Inertia Reactjs Project Setup

1. composer create-project laravel/laravel laravel-inertia(Project Name)
2.change .env according to your choice
3.composer require inertiajs/inertia-laravel
4. php artisan inertia:middleware
5.npm install react react-dom @inertiajs/react
6.npm install -D @vitejs/plugin-react
7 Open vite.config.js and replace with this:
	import { defineConfig } from 'vite'
	import laravel from 'laravel-vite-plugin'
	import react from '@vitejs/plugin-react'

	export default defineConfig({
		plugins: [
			laravel({
				input: 'resources/js/app.jsx',
				refresh: true,
			}),
			react(),
		],
	})

8. rename resources/js/app.js → app.jsx this is react entry point to render component:
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'

createInertiaApp({
    resolve: name => import(`./Pages/${name}.jsx`),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})

9. Update or create resources/views/app.blade.php:
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
</head>
<body>
    @inertia
</body>
</html>

10. resources/js/Pages/Home.jsx

export default function Home() {
    return <h1>Laravel + Inertia + React ✅</h1>
}

11.for testing purpose web.php:
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});



