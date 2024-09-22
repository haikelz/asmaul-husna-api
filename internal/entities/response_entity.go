package entities

type BaseResponse struct {
	StatusCode int `json:"statusCode"`
}

type HomeEndpoints struct {
	All    string `json:"all"`
	Urutan string `json:"urutan"`
	Latin  string `json:"latin"`
}

type HomeResponse struct {
	Author     string        `json:"author"`
	Repository string        `json:"repository"`
	Endpoints  HomeEndpoints `json:"endpoints"`
}
