package server

import (
	"asmaul-husna/pkg/configs"
	"os"

	"github.com/gofiber/contrib/fiberzerolog"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/compress"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/csrf"
	"github.com/gofiber/fiber/v2/middleware/etag"
	"github.com/gofiber/fiber/v2/middleware/favicon"
	"github.com/gofiber/fiber/v2/middleware/healthcheck"
	"github.com/gofiber/fiber/v2/middleware/helmet"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/rs/zerolog"
)

type FiberApp struct {
	*fiber.App
}

func New() *FiberApp {
	server := &FiberApp{
		App: configs.FbrCfg,
	}

	logger := zerolog.New(os.Stderr).With().Timestamp().Logger()

	server.Use(fiberzerolog.New(fiberzerolog.Config{Logger: &logger}))

	server.Use(cors.New())
	server.Use(compress.New(compress.Config{Level: compress.LevelBestSpeed}))
	server.Use(csrf.New())
	server.Use(favicon.New())
	server.Use(healthcheck.New())

	// Set COEP to credentialless. In this case, we want to allow Swagger docs to show its UI
	// Default COEP: require-corp
	// @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy
	// @see https://docs.gofiber.io/api/middleware/helmet
	server.Use(helmet.New(helmet.Config{CrossOriginEmbedderPolicy: "credentialless"}))

	server.Use(recover.New())
	server.Use(etag.New())

	return server
}
