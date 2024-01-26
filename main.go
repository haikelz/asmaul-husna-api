package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/gosimple/slug"
	"github.com/haikelz/asmaul-husna-api/error"
	"github.com/haikelz/asmaul-husna-api/middleware"
)

type homeDataEndpoints struct {
	All    string `json:"/api/all"`
	Urutan string `json:"/api/:urutan"`
	Latin  string `json:"/api/latin/:latin"`
}

type homeData struct {
	Author     string            `json:"author"`
	Repository string            `json:"repository"`
	Endpoints  homeDataEndpoints `json:"endpoints"`
}

func getHomeData(ctx *gin.Context) {
	message := homeData{
		Author:     "Haikel Ilham Hakim",
		Repository: "https://github.com/haikelz/asmaul-husna-api",
		Endpoints: homeDataEndpoints{
			All:    "Get all Asma'ul Husna",
			Urutan: "Get spesific Asma'ul Husna based on urutan",
			Latin:  "Get spesific Asma'ul Husna based on latin",
		},
	}

	ctx.JSON(http.StatusOK, message)
}

type baseData struct {
	Urutan int    `json:"urutan"`
	Latin  string `json:"latin"`
	Arab   string `json:"arab"`
	Arti   string `json:"arti"`
}

func asmaulHusna() []baseData {
	jsonFile, err := os.Open("data.json")

	if err != nil {
		fmt.Println(err)
	}

	defer jsonFile.Close()

	byteValue, _ := io.ReadAll(jsonFile)

	var asmaulHusna allAsmaulHusna

	json.Unmarshal(byteValue, &asmaulHusna)

	return asmaulHusna.Data
}

type allAsmaulHusna struct {
	StatusCode int        `json:"statusCode"`
	Total      int        `json:"total"`
	Data       []baseData `json:"data"`
}

// get all Asmaul Husna
func getAllAsmaulHusna(ctx *gin.Context) {
	message := allAsmaulHusna{
		StatusCode: http.StatusOK,
		Total:      len(asmaulHusna()),
		Data:       asmaulHusna(),
	}

	ctx.JSON(http.StatusOK, message)
}

type dataBasedOnUrutan struct {
	StatusCode int      `json:"statusCode"`
	Total      int      `json:"total"`
	Data       baseData `json:"data"`
}

type errorMessage struct {
	StatusCode int    `json:"statusCode"`
	Message    string `json:"message"`
}

// get data based on urutan
func getDataBasedOnUrutan(ctx *gin.Context) {
	data := []baseData{}

	urutan, err := strconv.Atoi(ctx.Param("urutan"))

	for i := range asmaulHusna() {
		if err == nil {
			// Compare urutan with item.urutan
			if asmaulHusna()[i].Urutan == urutan {
				data = append(data, asmaulHusna()[i])
			}
		}
	}

	// get index[0] from array data
	i := 0

	if i >= 0 && i < len(data) {
		data := data[i]

		message := dataBasedOnUrutan{
			StatusCode: http.StatusOK,
			Total:      1,
			Data:       data,
		}

		ctx.JSON(http.StatusOK, message)
	} else {
		err := error.NewCustomError(http.StatusNotFound, "Not Found")
		ctx.Error(err)
	}
}

type dataBasedOnLatin struct {
	StatusCode int      `json:"statusCode"`
	Total      int      `json:"total"`
	Data       baseData `json:"data"`
}

// get data based on latin
func getDataBasedOnLatin(ctx *gin.Context) {
	data := []baseData{}

	for i := range asmaulHusna() {
		/**
		 * - latin can be lowercase or uppercase
		 * - In the end, it'll be transformed to lowercase format
		 */
		if slug.Make(asmaulHusna()[i].Latin) == slug.Make(ctx.Param("latin")) {
			data = append(data, asmaulHusna()[i])
		}
	}

	// get index[0] from array data
	i := 0

	if i >= 0 && i < len(data) {
		data := data[i]

		message := dataBasedOnLatin{
			StatusCode: http.StatusOK,
			Total:      1,
			Data:       data,
		}

		ctx.JSON(http.StatusOK, message)
	} else {
		err := error.NewCustomError(http.StatusNotFound, "Not Found")
		ctx.Error(err)
	}
}

func handleErrorApiEndpoint(ctx *gin.Context) {
	err := error.NewCustomError(http.StatusNotFound, "Not Found")
	ctx.Error(err)
}

func main() {
	router := gin.Default()

	router.Use(middleware.GlobalErrorHandler())

	router.GET("/", getHomeData)
	router.GET("/api", handleErrorApiEndpoint)
	router.GET("/api/all", getAllAsmaulHusna)
	router.GET("/api/latin/:latin", getDataBasedOnLatin)
	router.GET("/api/:urutan", getDataBasedOnUrutan)

	router.Run("localhost:5000")
}
