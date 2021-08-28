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
		-e URL_DB: 'mongodb://mongodb:27017/interfaces' \
		-e URL_DB_USER=root \
		-e URL_DB_PWD=pwd123456 \
		--net node-net \
		-d galaxy202108.azurecr.io/karramirez/apinode:1.0.0

	docker run --name proxy \
		-v $PWD/nginx.conf:/etc/nginx/nginx.conf:ro \
		--net node-net \
		-p 9060:9060 -d nginx


