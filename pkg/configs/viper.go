package configs

import (
	"strings"

	"github.com/spf13/viper"
)

func NewViper() *viper.Viper {
	viper.SetConfigFile(".env")
	viper.AddConfigPath(".")
	viper.SetEnvKeyReplacer(strings.NewReplacer(".", "_"))
	viper.AutomaticEnv()

	return viper.GetViper()
}
