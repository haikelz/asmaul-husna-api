package main

import (
	"asmaul-husna/pkg/server"

	"github.com/gofiber/contrib/swagger"
)

// Run project in local
func main() {
	server := server.New()
	server.RegisterFiberRoutes()

	swgCfg := swagger.Config{
		BasePath: "/",
		FilePath: "pkg/server/docs/swagger.json",
		Path:     "docs",
		Title:    "Asma'ul Husna Docs",
		CacheAge: 60,
	}

	server.Use(swagger.New(swgCfg))
	server.Listen(":5000")
}
