package error

import "fmt"

type CustomError struct {
	StatusCode int    `json:"statusCode"`
	Message    string `json:"message"`
}

func (ce *CustomError) Error() string {
	return fmt.Sprintf("Error %d: %s", ce.StatusCode, ce.Message)
}

func NewCustomError(statusCode int, message string) *CustomError {
	return &CustomError{
		StatusCode: statusCode,
		Message:    message,
	}
}
