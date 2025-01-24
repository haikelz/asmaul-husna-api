package configs

import (
	"asmaul-husna/pkg/utils"

	"github.com/gofiber/contrib/swagger"
)

var filePath string = utils.FormatToAbsolutePath("pkg/server/docs/swagger.json")
var SwgCfg = swagger.Config{
	BasePath: "/",
	FilePath: filePath,
	Path:     "docs",
	Title:    "Asma'ul Husna API Docs",
	CacheAge: 60,
}
