// Go Learning Path - Modules Definition
const modules = [
  {
    module: 1,
    title: "Pengenalan",
    lessons: [
      { slug: "apa-itu-go", title: "Apa itu Go?" },
      { slug: "instalasi-dan-setup", title: "Instalasi dan Setup Go Environment" },
    ]
  },
  {
    module: 2,
    title: "Dasar",
    lessons: [
      { slug: "variabel-dan-tipe-data", title: "Variabel dan Tipe Data" },
      { slug: "operator-dan-ekspresi", title: "Operator dan Ekspresi" },
    ]
  },
  {
    module: 3,
    title: "Kontrol",
    lessons: [
      { slug: "control-flow-if-else", title: "Control Flow: If dan Else" },
      { slug: "loop-dan-iterasi", title: "Loop dan Iterasi" },
      { slug: "switch-dan-select", title: "Switch dan Select Statement" },
    ]
  },
  {
    module: 4,
    title: "Fungsi",
    lessons: [
      { slug: "fungsi-dasar", title: "Fungsi Dasar" },
      { slug: "closure-dan-anonymous", title: "Closure dan Anonymous Functions" },
    ]
  },
  {
    module: 5,
    title: "Data Structure",
    lessons: [
      { slug: "array-dan-slice", title: "Array dan Slice" },
      { slug: "map-dan-key-value", title: "Map: Key-Value Data Structure" },
    ]
  },
  {
    module: 6,
    title: "OOP",
    lessons: [
      { slug: "struct-dan-method", title: "Struct dan Method" },
      { slug: "interface-dasar", title: "Interface Dasar" },
    ]
  },
  {
    module: 7,
    title: "Error",
    lessons: [
      { slug: "error-handling", title: "Error Handling di Go" },
    ]
  },
  {
    module: 8,
    title: "Concurrency",
    lessons: [
      { slug: "goroutine-dasar", title: "Goroutine Dasar" },
      { slug: "channel-dasar", title: "Channel Dasar" },
      { slug: "select-dan-concurrency", title: "Select dan Pattern Concurrency" },
    ]
  },
  {
    module: 9,
    title: "Memory",
    lessons: [
      { slug: "pointer-dasar", title: "Pointer Dasar" },
    ]
  },
  {
    module: 10,
    title: "Modul",
    lessons: [
      { slug: "package-dan-import", title: "Package dan Import System" },
      { slug: "module-dan-dependency", title: "Go Modules dan Dependency Management" },
    ]
  },
  {
    module: 11,
    title: "File",
    lessons: [
      { slug: "file-io-dasar", title: "File I/O Dasar" },
    ]
  },
  {
    module: 12,
    title: "Data",
    lessons: [
      { slug: "json-dan-encoding", title: "JSON dan Encoding" },
    ]
  },
  {
    module: 13,
    title: "Testing",
    lessons: [
      { slug: "testing-dasar", title: "Testing Dasar" },
    ]
  },
  {
    module: 14,
    title: "Web",
    lessons: [
      { slug: "http-server-dasar", title: "HTTP Server Dasar" },
    ]
  },
  {
    module: 15,
    title: "Advanced",
    lessons: [
      { slug: "context-dan-timeout", title: "Context dan Timeout" },
      { slug: "defer-panic-recover", title: "Defer, Panic, dan Recover" },
      { slug: "generics-dasar", title: "Generics Dasar (Go 1.18+)" },
      { slug: "reflection-dasar", title: "Reflection Dasar" },
    ]
  },
  {
    module: 16,
    title: "Project",
    lessons: [
      { slug: "cli-application", title: "Membuat CLI Application" },
      { slug: "rest-api-project", title: "Membuat REST API" },
    ]
  },
];

module.exports = modules;