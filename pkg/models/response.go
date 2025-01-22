package models

import "asmaul-husna/pkg/entities"

type APIErrorResponse struct {
	StatusCode int    `json:"statusCode"`
	Message    string `json:"message"`
	Stack      string `json:"-"`
}

type APISuccessResponse struct {
	StatusCode int         `json:"statusCode"`
	Total      int         `json:"total"`
	Data       interface{} `json:"data,omitempty"`
}

type APIInfoResponse struct {
	Author     string                 `json:"author"`
	Repository string                 `json:"repository"`
	Endpoints  entities.EndpointsInfo `json:"endpoints"`
}
