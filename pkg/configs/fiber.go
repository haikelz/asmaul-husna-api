package configs

import (
	"github.com/bytedance/sonic"
	"github.com/gofiber/fiber/v2"
)

var FbrCfg = fiber.New(fiber.Config{
	ServerHeader:  "asmaulhusna",
	AppName:       "asmaulhusna",
	JSONEncoder:   sonic.Marshal,
	JSONDecoder:   sonic.Unmarshal,
	Prefork:       true,
	StrictRouting: true,
})
