package configs

import (
	"github.com/gofiber/contrib/swagger"
)

var SwgCfg = swagger.Config{
	BasePath: "/",
	FilePath: "pkg/server/docs/swagger.json",
	Path:     "docs",
	Title:    "Asma'ul Husna Docs",
	CacheAge: 60,
}
