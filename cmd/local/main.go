package main

import (
	"asmaul-husna/pkg/server"
)

// Run project in local
func main() {
	server := server.New()
	server.RegisterFiberRoutes()
	server.Listen(":5000")
}
