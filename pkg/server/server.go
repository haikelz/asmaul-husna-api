package server

import (
	"github.com/bytedance/sonic"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/compress"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/csrf"
	"github.com/gofiber/fiber/v2/middleware/etag"
	"github.com/gofiber/fiber/v2/middleware/favicon"
	"github.com/gofiber/fiber/v2/middleware/healthcheck"
	"github.com/gofiber/fiber/v2/middleware/helmet"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
)

type FiberApp struct {
	*fiber.App
}

func New() *FiberApp {
	server := &FiberApp{
		App: fiber.New(fiber.Config{
			ServerHeader:  "asmaulhusna",
			AppName:       "asmaulhusna",
			JSONEncoder:   sonic.Marshal,
			JSONDecoder:   sonic.Unmarshal,
			Prefork:       true,
			StrictRouting: true,
		}),
	}

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
	server.Use(logger.New(logger.Config{Format: "${ip} ${pid} ${locals:requestid} ${status} - ${method} ${path}\n"}))

	return server
}
