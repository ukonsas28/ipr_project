# global variables
NETWORK = ipr-network
# front_app
FRONT_APP_NAME = ipr-frontend
FRONT_APP_PATH = ${PWD}/ipr-front-nextjs
# back_app
BACK_APP_NAME = ipr-backend
BACK_APP_PATH = ${PWD}/ipr-back-hapijs






initial_project:
	docker network create ${NETWORK}
	docker build -t ${FRONT_APP_NAME} FRONT_APP_PATH
	docker build -t ${BACK_APP_NAME} BACK_APP_PATH
