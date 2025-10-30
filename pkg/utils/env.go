package utils

import (
	"asmaul-husna/pkg/configs"
	entities "asmaul-husna/pkg/entities"
	"log"

	"github.com/spf13/viper"
)

func EnvVariables() *entities.Env {
	v := configs.NewViper()

	_ = v.BindEnv("PORT")

	if err := v.ReadInConfig(); err != nil {
		if _, ok := err.(viper.ConfigFileNotFoundError); !ok {
			log.Printf("Error reading config file: %v", err)
		}
	}

	env := entities.Env{
		PORT: v.GetString("PORT"),
	}

	return &env
}
