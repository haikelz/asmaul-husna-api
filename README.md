<img src="https://github.com/Safouene1/support-palestine-banner/blob/master/banner-support.svg" width="100%" />

<div align="center">
  <h1>asmaul-husna-api</h1>
  <p>asmaul-husna-api is an API to get the list of Asma'ul Husna</p>
</div>

## Endpoints

| Endpoint            | Method | Description                                |
| ------------------- | ------ | ------------------------------------------ |
| `/`                 | GET    | Get info about the API                     |
| `/docs`             | GET    | Swagger playground                         |
| `/api/all`          | GET    | Get all Asma'ul Husna                      |
| `/api/:urutan`      | GET    | Get spesific Asma'ul Husna based on urutan |
| `/api/latin/:latin` | GET    | Get spesific Asma'ul Husna based on latin  |
| `/metrics`          | GET    | Get metrics                                |

## Response Example

**Get all Asma'ul Husna**

Request:

```ts
fetch("https://asmaul-husna-api.vercel.app/api/all")
  .then((res) => res.json())
  .then((result) => console.log(result));
```

Response:

```json
{
  "statusCode": 200,
  "total": 99,
  "data": [
    {
      "urutan": 1,
      "latin": "Ar Rahman",
      "arab": "الرحمن",
      "arti": "Yang Maha Pengasih"
    },
    {
      "urutan": 2,
      "latin": "Ar Rahiim",
      "arab": "الرحيم",
      "arti": "Yang Maha Penyayang"
    },
    {
      "urutan": 3,
      "latin": "Al Malik",
      "arab": "الملك",
      "arti": "Yang Maha Merajai / Memerintah"
    },
    ....
  ]
}
```

With `page` and `limit`

```ts
// REST
fetch("https://asmaul-husna-api.vercel.app/api/all?page=2&limit=20")
  .then((res) => res.json())
  .then((result) => console.log(result));
```

**Note:** The `page` and `limit` query are optional. But if you want to use the `page` query, you must use the `limit` query as well.

Response:

```json
{
  "statusCode": 200,
  "total": 20,
  "data": [
    {
      "urutan": 21,
      "latin": "Al Baasith",
      "arab": "الباسط",
      "arti": "Yang Maha Melapangkan(makhluknya)"
    },
    {
      "urutan": 22,
      "latin": "Al Khaafidh",
      "arab": "الخافض",
      "arti": "Yang Maha Merendahkan(makhluknya)"
    },
    {
      "urutan": 23,
      "latin": "Ar Raafi '",
      "arab": "الرافع",
      "arti": "Yang Maha Meninggikan(makhluknya)"
    },
    ...
  ]
}
```

**Get spesific Asma'ul Husna based on urutan**

Request:

```ts
fetch("https://asmaul-husna-api.vercel.app/api/1")
  .then((res) => res.json())
  .then((result) => console.log(result));
```

Response:

```json
{
  "statusCode": 200,
  "total": 1,
  "data": {
    "urutan": 1,
    "latin": "Ar Rahman",
    "arab": "الرحمن",
    "arti": "Yang Maha Pengasih"
  }
}
```

**Get spesific Asma'ul Husna based on latin**

Note: the latin can be lowercase or uppercase.

Request:

```ts
fetch("https://asmaul-husna-api.vercel.app/api/latin/ar-rahman")
  .then((res) => res.json())
  .then((result) => console.log(result));
```

Response:

```json
{
  "statusCode": 200,
  "total": 1,
  "data": {
    "urutan": 1,
    "latin": "Ar Rahman",
    "arab": "الرحمن",
    "arti": "Yang Maha Pengasih"
  }
}
```

**Metrics**

Request:

```ts
fetch("https://asmaul-husna-api.vercel.app/metrics")
  .then((res) => res.json())
  .then((result) => console.log(result));
```

Response:

```
# HELP go_gc_duration_seconds A summary of the wall-time pause (stop-the-world) duration in garbage collection cycles.
# TYPE go_gc_duration_seconds summary
go_gc_duration_seconds{quantile="0"} 0.000267142
go_gc_duration_seconds{quantile="0.25"} 0.000267142
go_gc_duration_seconds{quantile="0.5"} 0.000267142
go_gc_duration_seconds{quantile="0.75"} 0.000267142
go_gc_duration_seconds{quantile="1"} 0.000267142
go_gc_duration_seconds_sum 0.000267142
go_gc_duration_seconds_count 1
# HELP go_gc_gogc_percent Heap size target percentage configured by the user, otherwise 100. This value is set by the GOGC environment variable, and the runtime/debug.SetGCPercent function. Sourced from /gc/gogc:percent
# TYPE go_gc_gogc_percent gauge
go_gc_gogc_percent 100
# HELP go_gc_gomemlimit_bytes Go runtime memory limit configured by the user, otherwise math.MaxInt64. This value is set by the GOMEMLIMIT environment variable, and the runtime/debug.SetMemoryLimit function. Sourced from /gc/gomemlimit:bytes
# TYPE go_gc_gomemlimit_bytes gauge
go_gc_gomemlimit_bytes 9.223372036854776e+18
# HELP go_goroutines Number of goroutines that currently exist.
# TYPE go_goroutines gauge
go_goroutines 11
# HELP go_info Information about the Go environment.
# TYPE go_info gauge
go_info{version="go1.23.1"} 1
# HELP go_memstats_alloc_bytes Number of bytes allocated in heap and currently in use. Equals to /memory/classes/heap/objects:bytes.
# TYPE go_memstats_alloc_bytes gauge
go_memstats_alloc_bytes 2.629952e+06
# HELP go_memstats_alloc_bytes_total Total number of bytes allocated in heap until now, even if released already. Equals to /gc/heap/allocs:bytes.
# TYPE go_memstats_alloc_bytes_total counter
go_memstats_alloc_bytes_total 4.7154e+06
# HELP go_memstats_buck_hash_sys_bytes Number of bytes used by the profiling bucket hash table. Equals to /memory/classes/profiling/buckets:bytes.
# TYPE go_memstats_buck_hash_sys_bytes gauge
go_memstats_buck_hash_sys_bytes 34632
# HELP go_memstats_frees_total Total number of heap objects frees. Equals to /gc/heap/frees:objects + /gc/heap/tiny/allocs:objects.
# TYPE go_memstats_frees_total counter
go_memstats_frees_total 10236
# HELP go_memstats_gc_sys_bytes Number of bytes used for garbage collection system metadata. Equals to /memory/classes/metadata/other:bytes.
# TYPE go_memstats_gc_sys_bytes gauge
go_memstats_gc_sys_bytes 2.432096e+06
# HELP go_memstats_heap_alloc_bytes Number of heap bytes allocated and currently in use, same as go_memstats_alloc_bytes. Equals to /memory/classes/heap/objects:bytes.
# TYPE go_memstats_heap_alloc_bytes gauge
go_memstats_heap_alloc_bytes 2.629952e+06
# HELP go_memstats_heap_idle_bytes Number of heap bytes waiting to be used. Equals to /memory/classes/heap/released:bytes + /memory/classes/heap/free:bytes.
# TYPE go_memstats_heap_idle_bytes gauge
go_memstats_heap_idle_bytes 3.52256e+06
# HELP go_memstats_heap_inuse_bytes Number of heap bytes that are in use. Equals to /memory/classes/heap/objects:bytes + /memory/classes/heap/unused:bytes
# TYPE go_memstats_heap_inuse_bytes gauge
go_memstats_heap_inuse_bytes 4.243456e+06
# HELP go_memstats_heap_objects Number of currently allocated objects. Equals to /gc/heap/objects:objects.
# TYPE go_memstats_heap_objects gauge
go_memstats_heap_objects 12532
# HELP go_memstats_heap_released_bytes Number of heap bytes released to OS. Equals to /memory/classes/heap/released:bytes.
# TYPE go_memstats_heap_released_bytes gauge
go_memstats_heap_released_bytes 2.310144e+06
# HELP go_memstats_heap_sys_bytes Number of heap bytes obtained from system. Equals to /memory/classes/heap/objects:bytes + /memory/classes/heap/unused:bytes + /memory/classes/heap/released:bytes + /memory/classes/heap/free:bytes.
# TYPE go_memstats_heap_sys_bytes gauge
go_memstats_heap_sys_bytes 7.766016e+06
# HELP go_memstats_last_gc_time_seconds Number of seconds since 1970 of last garbage collection.
# TYPE go_memstats_last_gc_time_seconds gauge
go_memstats_last_gc_time_seconds 1.7613454481122546e+09
# HELP go_memstats_mallocs_total Total number of heap objects allocated, both live and gc-ed. Semantically a counter version for go_memstats_heap_objects gauge. Equals to /gc/heap/allocs:objects + /gc/heap/tiny/allocs:objects.
# TYPE go_memstats_mallocs_total counter
go_memstats_mallocs_total 22768
# HELP go_memstats_mcache_inuse_bytes Number of bytes in use by mcache structures. Equals to /memory/classes/metadata/mcache/inuse:bytes.
# TYPE go_memstats_mcache_inuse_bytes gauge
go_memstats_mcache_inuse_bytes 1200
# HELP go_memstats_mcache_sys_bytes Number of bytes used for mcache structures obtained from system. Equals to /memory/classes/metadata/mcache/inuse:bytes + /memory/classes/metadata/mcache/free:bytes.
# TYPE go_memstats_mcache_sys_bytes gauge
go_memstats_mcache_sys_bytes 15600
# HELP go_memstats_mspan_inuse_bytes Number of bytes in use by mspan structures. Equals to /memory/classes/metadata/mspan/inuse:bytes.
# TYPE go_memstats_mspan_inuse_bytes gauge
go_memstats_mspan_inuse_bytes 70240
# HELP go_memstats_mspan_sys_bytes Number of bytes used for mspan structures obtained from system. Equals to /memory/classes/metadata/mspan/inuse:bytes + /memory/classes/metadata/mspan/free:bytes.
# TYPE go_memstats_mspan_sys_bytes gauge
go_memstats_mspan_sys_bytes 130560
# HELP go_memstats_next_gc_bytes Number of heap bytes when next garbage collection will take place. Equals to /gc/heap/goal:bytes.
# TYPE go_memstats_next_gc_bytes gauge
go_memstats_next_gc_bytes 5.557792e+06
# HELP go_memstats_other_sys_bytes Number of bytes used for other system allocations. Equals to /memory/classes/other:bytes.
# TYPE go_memstats_other_sys_bytes gauge
go_memstats_other_sys_bytes 949624
# HELP go_memstats_stack_inuse_bytes Number of bytes obtained from system for stack allocator in non-CGO environments. Equals to /memory/classes/heap/stacks:bytes.
# TYPE go_memstats_stack_inuse_bytes gauge
go_memstats_stack_inuse_bytes 622592
# HELP go_memstats_stack_sys_bytes Number of bytes obtained from system for stack allocator. Equals to /memory/classes/heap/stacks:bytes + /memory/classes/os-stacks:bytes.
# TYPE go_memstats_stack_sys_bytes gauge
go_memstats_stack_sys_bytes 622592
# HELP go_memstats_sys_bytes Number of bytes obtained from system. Equals to /memory/classes/total:byte.
# TYPE go_memstats_sys_bytes gauge
go_memstats_sys_bytes 1.195112e+07
# HELP go_sched_gomaxprocs_threads The current runtime.GOMAXPROCS setting, or the number of operating system threads that can execute user-level Go code simultaneously. Sourced from /sched/gomaxprocs:threads
# TYPE go_sched_gomaxprocs_threads gauge
go_sched_gomaxprocs_threads 1
# HELP go_threads Number of OS threads created.
# TYPE go_threads gauge
go_threads 11
# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 0.03
# HELP process_max_fds Maximum number of open file descriptors.
# TYPE process_max_fds gauge
process_max_fds 1.048576e+06
# HELP process_network_receive_bytes_total Number of bytes received by the process over the network.
# TYPE process_network_receive_bytes_total counter
process_network_receive_bytes_total 2.419803787e+09
# HELP process_network_transmit_bytes_total Number of bytes sent by the process over the network.
# TYPE process_network_transmit_bytes_total counter
process_network_transmit_bytes_total 1.06691241e+08
# HELP process_open_fds Number of open file descriptors.
# TYPE process_open_fds gauge
process_open_fds 12
# HELP process_resident_memory_bytes Resident memory size in bytes.
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes 2.8422144e+07
# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE process_start_time_seconds gauge
process_start_time_seconds 1.76134544718e+09
# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes 1.960214528e+09
# HELP process_virtual_memory_max_bytes Maximum amount of virtual memory available in bytes.
# TYPE process_virtual_memory_max_bytes gauge
process_virtual_memory_max_bytes 1.8446744073709552e+19
# HELP promhttp_metric_handler_requests_in_flight Current number of scrapes being served.
# TYPE promhttp_metric_handler_requests_in_flight gauge
promhttp_metric_handler_requests_in_flight 1
# HELP promhttp_metric_handler_requests_total Total number of scrapes by HTTP status code.
# TYPE promhttp_metric_handler_requests_total counter
promhttp_metric_handler_requests_total{code="200"} 0
promhttp_metric_handler_requests_total{code="500"} 0
promhttp_metric_handler_requests_total{code="503"} 0
```

## Technologies

- Go
- Fiber
- Swagger for API Documentation
- Prometheus and Grafana for API monitoring
- Protocol Buffer
- Zerolog

## Getting Started

- First, clone this repo.
- Make sure that you've already installed `air` for live reloading. Type `air` to run the project locally. If you are a Windows user, you must change some configurations in `air.toml` file, more spesific in `cmd` and `bin` parts.

## Credits

- [Muhammad Rivki](https://github.com/mikqi) for the original Asma'ul Husna json.
