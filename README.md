RETO 01

Network

	docker network create node-net

Database

	
	docker run --name mongodb \
		-e MONGO_INITDB_ROOT_USERNAME=root \
		-e MONGO_INITDB_ROOT_PASSWORD=pwd123456 \
		-e MONGO_INITDB_DATABASE=interfaces \
		--net node-net \
		-d mongo
	
	docker run --name mongo-express \
		-e ME_CONFIG_MONGODB_ADMINUSERNAME=root \
		-e ME_CONFIG_MONGODB_ADMINPASSWORD=pwd123456 \
		-e ME_CONFIG_MONGODB_ENABLE_ADMIN=true \
		-e ME_CONFIG_MONGODB_SERVER=mongodb \
		-p 9081:8081 \
		--net node-net \
		-d mongo-express

BackEnd
	docker build -t apinode:1.0.0 .
	
	docker run --name backend \
		-e URL_DB='mongodb://mongodb:27017/interfaces' \
		-e URL_DB_USER=root \
		-e URL_DB_PWD=pwd123456 \
		--net node-net \
		-d apinode:1.0.0

	docker run --name proxy \
		-v $PWD/nginx.conf:/etc/nginx/nginx.conf:ro \
		--net node-net \
		-p 9060:9060 -d nginx


docker rm $(docker ps -aq) -f  	//Eliminar todos los containers

docker system prune				//Libera recursos



RETO 02

	docker build -t config-server:1.0.0 . --no-cache
	
	docker run \
	-e GIT_URI="https://github.com/mzegarras/ms-configuration.git" \
	-e GIT_USER="kramirez" \
	-e GIT_PWD="" \
	-e KEYSTORE_PWD="YOU_KEYSTORE_PASSWORD" \
	-e KEYSTORE_ALIAS="YOU_CONFIG_SERVER_KEY" \
	-e KEYSTORE_SECRET="YOU_KEYSTORE_PASSWORD" \
	-v $PWD/config-server.jks:/config-server.jks:ro \
	-p 8888:8888 \
	config-server:1.0.0
	
	
