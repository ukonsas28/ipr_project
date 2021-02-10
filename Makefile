# global variables
APP_NAME = ipr-project
NETWORK = ipr-network
WORKDIR = /usr/src/app
IMAGE = image:app
# front_app
FRONT_APP_NAME = frontend
FRONT_APP_PATH = ${PWD}/ipr-front-nextjs
# back_app
BACK_APP_NAME = backend
BACK_APP_PATH = ${PWD}/ipr-back-hapijs
#database
POSTGRES_NAME = postgres
PG_ADMIN_NAME = dpage/pgadmin4
DEFAULT_USER = developer
DEFAULT_EMAIL = developer@mail.ru
DEFAULT_PASSWORD = developer





initial_project:
	docker network create ${NETWORK} || true
	docker build -t ${APP_NAME}_${FRONT_APP_NAME}_${IMAGE} ${FRONT_APP_PATH}
	docker build -t ${APP_NAME}_${BACK_APP_NAME}_${IMAGE} ${BACK_APP_PATH}
	docker pull ${POSTGRES_NAME}
	docker pull ${PG_ADMIN_NAME}



start_project: front_app back_app postgres pg_admin


front_app:
	docker run --rm -it \
		--name $(APP_NAME)_${FRONT_APP_NAME} \
		--network $(NETWORK_NAME) \
		-P 3000:3000 \
		-v ${FRONT_APP_PATH}:${WORKDIR} \
		-d ${APP_NAME}_${FRONT_APP_NAME}_image

back_app:
	docker run --rm -it \
		--name $(APP_NAME)_${BACK_APP_NAME} \
		--network $(NETWORK_NAME) \
		-P 8888:8888 \
		-v ${BACK_APP_PATH}:${WORKDIR} \
		-d ${APP_NAME}_${BACK_APP_NAME}_${IMAGE}

postgres:
	docker rm $(APP_NAME)_${POSTGRES_NAME} || true
	docker run --rm \
		--name $(APP_NAME)_${POSTGRES_NAME} \
		--network $(NETWORK_NAME) \
		-p 5434:5432 \
		-e POSTGRES_PASSWORD = ${DEFAULT_PASSWORD} \
		-e POSTGRES_USER = ${DEFAULT_USER} \
		-d ${POSTGRES_NAME}

pg_admin:
	docker rm $(APP_NAME)_${PG_ADMIN_NAME} || true
	docker run --rm \
		--name $(APP_NAME)_${PG_ADMIN_NAME} \
		--network $(NETWORK_NAME) \
		-p 16543:80 \
    	-e 'PGADMIN_DEFAULT_EMAIL = ${DEFAULT_EMAIL}' \
    	-e 'PGADMIN_DEFAULT_PASSWORD = ${DEFAULT_PASSWORD}' \
		-d ${PG_ADMIN_NAME}

