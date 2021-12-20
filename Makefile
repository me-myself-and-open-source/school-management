create_application:
	npx create-react-app@5.0.0 school-management

install_tailwind:
	npm install -D tailwindcss postcss autoprefixer && \
	npx tailwindcss init -p

tailwind_config:
	echo "module.exports = { \n \
	content: [ \n \
		'./src/**/*.{js,jsx,ts,tsx}', \n \
	], \n \
	theme: { \n \
		extend: {}, \n \
	}, \n \
	plugins: [], \n \
}" > tailwind.config.js

tailwind_css_directives:
	echo "@tailwind base; \n \
@tailwind components;\n \
@tailwind utilities;" > src/index.css

add_hero_icons:
	npm install --save @heroicons/react

install_router:
	npm install react-router-dom@6 history@5


