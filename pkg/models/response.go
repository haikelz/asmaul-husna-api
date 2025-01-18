package models

type APIErrorResponse struct {
	StatusCode int    `json:"statusCode"`
	Message    string `json:"message"`
	Stack      string `json:"-"`
}

type APIResponse struct {
	StatusCode int         `json:"statusCode"`
	Total      int         `json:"total"`
	Data       interface{} `json:"data,omitempty"`
}
