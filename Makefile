# global variables
APP_NAME = ipr-project
NETWORK = ipr-network
WORKDIR = /usr/src/app
IMAGE = image
# front_app
FRONT_APP_NAME = frontend
FRONT_APP_PATH = ${PWD}/ipr-front-nextjs
# back_app
BACK_APP_NAME = backend
BACK_APP_PATH = ${PWD}/ipr-back-hapijs
#database
POSTGRES_NAME = postgres
PG_ADMIN_NAME = pgadmin4
DEFAULT_USER = developer
DEFAULT_EMAIL = developer@mail.ru
DEFAULT_PASSWORD = developer
DEFAULT_DB = ipr_db




initial:
	docker network create ${NETWORK} || true
	docker build -t ${APP_NAME}_${FRONT_APP_NAME}_${IMAGE} ${FRONT_APP_PATH}
	docker build -t ${APP_NAME}_${BACK_APP_NAME}_${IMAGE} ${BACK_APP_PATH}
	docker pull postgres
	docker pull dpage/pgadmin4


install_dep: front_dep_install back_dep_install

up: front_app back_app postgres pg_admin


down:
	docker stop $(APP_NAME)_${FRONT_APP_NAME} $(APP_NAME)_${BACK_APP_NAME} \
		$(APP_NAME)_${POSTGRES_NAME} $(APP_NAME)_${PG_ADMIN_NAME}


# install 
front_dep_install:
	cd ${FRONT_APP_PATH} && npm i

back_dep_install:
	cd ${BACK_APP_PATH} && npm i

# up
front_app:
	docker rm $(APP_NAME)_${FRONT_APP_NAME} || true
	docker run --rm -it \
		--name $(APP_NAME)_${FRONT_APP_NAME} \
		--network $(NETWORK) \
		-p 3000:3000 \
		-v ${FRONT_APP_PATH}:${WORKDIR} \
		-d ${APP_NAME}_${FRONT_APP_NAME}_${IMAGE}

back_app:
	docker rm $(APP_NAME)_${BACK_APP_NAME} || true
	docker run --rm -it \
		--name $(APP_NAME)_${BACK_APP_NAME} \
		--network $(NETWORK) \
		-p 8888:8888 \
		-v ${BACK_APP_PATH}:${WORKDIR} \
		-d ${APP_NAME}_${BACK_APP_NAME}_${IMAGE}

postgres:
	docker rm $(APP_NAME)_${POSTGRES_NAME} || true
	docker run --rm \
		--name $(APP_NAME)_${POSTGRES_NAME} \
		--network $(NETWORK) \
		-p 5434:5432 \
		-v $(BACK_APP_PATH)/pg_scripts:/docker-entrypoint-initdb.d \
		-e POSTGRES_PASSWORD=${DEFAULT_PASSWORD} \
		-e POSTGRES_USER=${DEFAULT_USER} \
		-e POSTGRES_DB=${DEFAULT_DB} \
		-d postgres

pg_admin:
	docker rm $(APP_NAME)_${PG_ADMIN_NAME} || true
	docker run --rm \
		--name $(APP_NAME)_${PG_ADMIN_NAME} \
		--network $(NETWORK) \
		-p 16543:80 \
    	-e 'PGADMIN_DEFAULT_EMAIL=${DEFAULT_EMAIL}' \
    	-e 'PGADMIN_DEFAULT_PASSWORD=${DEFAULT_PASSWORD}' \
		-d dpage/pgadmin4


# start
start_front: 
	docker exec -it $(APP_NAME)_${FRONT_APP_NAME} sh -ac 'npm start'

start_back: 
	docker exec -it $(APP_NAME)_${BACK_APP_NAME} sh -ac 'npm start'

gen_migration:
	docker exec -it $(APP_NAME)_${BACK_APP_NAME} sh -ac 'npm run gen_migration ${name}'

run_migration:
	docker exec -it $(APP_NAME)_${BACK_APP_NAME} sh -ac 'npm run run_migration'