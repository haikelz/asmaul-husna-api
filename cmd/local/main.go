package main

import "asmaul-husna-golang/pkg/server"

func main() {
	server := server.New()
	server.RegisterFiberRoutes()
	server.Listen(":5000")
}
