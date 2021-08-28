RETO UNO:

Network
	docker network create node-net

Database

	
	docker run --name mongodb \
		-e MONGO_INITDB_ROOT_USERNAME=root \
		-e MONGO_INITDB_ROOT_PASSWORD=pwd1234 \		
		--net node-net \
		-d mongo	
	
	docker run --name mongo-express \
		-e ME_CONFIG_MONGODB_ADMINUSERNAME=root \
		-e ME_CONFIG_MONGODB_ADMINPASSWORD=pwd1234 \
		-e ME_CONFIG_MONGODB_ENABLE_ADMIN=true \
		-e ME_CONFIG_MONGODB_SERVER=mongodb \
		-p 9081:8081 \
		--net node-net \
		-d mongo-express
	

BackEnd
	docker build -t apinode:1.0.0 .
	
	docker run -p 3000:3000 \
		--name reactiveapi \
		-v $PWD/application.yml:/application.yml \
		--net node-net \
		-d apinode:1.0.0

	docker run --name proxyserver0 \
		-v $PWD/nginx.conf:/etc/nginx/nginx.conf:ro \
		--net node-net \
		-p 9090:9060 -d nginx	


