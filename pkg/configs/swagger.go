package configs

import (
	"asmaul-husna/pkg/utils"

	"github.com/gofiber/contrib/swagger"
)

var SwgCfg = swagger.Config{
	BasePath: "/",
	FilePath: utils.AbsolutePath("pkg/server/docs/swagger.json"),
	Path:     "docs",
	Title:    "Asma'ul Husna Docs",
	CacheAge: 60,
}
