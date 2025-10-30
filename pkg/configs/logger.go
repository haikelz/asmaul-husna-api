package configs

import (
	"os"

	"github.com/rs/zerolog"
)

func InitLogger() zerolog.Logger {
	return zerolog.New(os.Stderr).With().Timestamp().Logger()
}
