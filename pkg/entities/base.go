package entities

type EndpointsInfo struct {
	All    string `json:"all"`
	Urutan string `json:"urutan"`
	Latin  string `json:"latin"`
}

type HomeInfo struct {
	Author     string        `json:"author"`
	Repository string        `json:"repository"`
	Endpoints  EndpointsInfo `json:"endpoints"`
}
