# PLAN: Melengkapi Konten Python Learning Path

## Status Saat Ini
- **Total Lessons**: 55 (10 modul, 5-8 lessons per modul)
- **Sudah Lengkap**: 5 lessons (M01-L01 sampai L04, M02-L01)
- **Belum Diisi**: 50 lessons (M02-L02 sampai M10-L08)
- **Repository**: `/root/python-learning-path`

## Analisis Template Standar

Berdasarkan file yang sudah bagus (M01-L01, L02, L03, L04, M02-L01), struktur konten yang konsisten adalah:

```markdown
# [Judul Lesson]
**ID**: `Mxx-Lyy`  
**Type**: lesson  
**Duration**: 30-60 menit  
**Tags**: python, tutorial

## Tujuan Pembelajaran
[What should learners achieve?]

## Materi

### Konsep Dasar
[Explain concepts in simple terms with examples]

### Detail Teknis
[Deep dive into syntax, functions, parameters, edge cases]

## Latihan

### Soal 1
[Problem statement with code template]

```python
def latihan_1():
    # Tulis kode kamu di sini
    pass

if __name__ == "__main__":
    latihan_1()
```

**Expected Output**:
```
[Expected result]
```

### Soal 2
[Second exercise with parameters]

```python
def latihan_2(param):
    # Tulis kode kamu di sini
    pass

if __name__ == "__main__":
    print(latihan_2(value))
```

**Expected Output**:
```
[Expected result]
```

## Referensi
- [Python Official Documentation](https://docs.python.org/3/)
- [Real Python - Topic](https://realpython.com/topic/)
- [W3Schools Python Tutorial](https://www.w3schools.com/python/)

## Next Steps
Setelah menyelesaikan pelajaran ini, lanjutkan ke:
- [Mxx-Lzz](Mxx-Lzz.md)
```

## Strategi Pengisian

### Opsi 1: Generate Konten Standar Python (DIPILIH)
Setiap lesson akan diisi dengan konten edukatif standar sesuai topik dari modules.json. Konten akan mencakup:
- Penjelasan konsep
- Contoh kode
- Latihan dengan expected output
- Referensi yang relevan

### Opsi 2: Salin Template dengan Penyesuaian
Hanya mengubah judul dan tujuan, tapi tetap butuh konten custom.

**Keputusan**: Gunakan Opsi 1 dengan generate konten otomatis berdasarkan topik.

## Plan Eksekusi per Modul

### MODUL 2: Control Flow and Logic
**Target**: M02-L02, M02-L03, M02-L04

#### M02-L02: Loops: while and for
- **Konsep**: while loop (condition-based), for loop (iteration), range(), loop control (break, continue, else)
- **Contoh**: while untuk input validation, for untuk iterasi list/string, range(start, stop, step)
- **Latihan 1**: while loop untuk menebak angka
- **Latihan 2**: for loop untuk menghitung factorial

#### M02-L03: Logical Operators and Boolean Expressions
- **Konsep**: and, or, not, truthiness, operator precedence, common pitfalls
- **Contoh**: Kombinasi kondisi, truthy/falsy values (0, "", [], None, False)
- **Latihan 1**: fungsi validasi input
- **Latihan 2**: calculator sederhana dengan kondisi

#### M02-L04: Match-Case Statements (Python 3.10+)
- **Konsep**: structural pattern matching, case patterns, guard clauses
- **Contoh**: match status code, match tuple/list, match dictionary
- **Latihan 1**: calculator dengan match-case
- **Latihan 2**: parser sederhana untuk perintah

---

### MODUL 3: Data Structures
**Target**: M03-L01 sampai M03-L06 (6 lessons)

#### M03-L01: Lists: Creation, Indexing, and Basic Operations
- **Konsep**: list creation (literal, constructor), indexing/slicing, methods (append, extend, insert, remove, pop, clear, index, count, sort, reverse)
- **Contoh**: Manipulasi list dasar
- **Latihan 1**: List operations (CRUD)
- **Latihan 2**: Reverse list tanpa reverse()

#### M03-L02: List Comprehensions and Advanced Manipulation
- **Konsep**: [expr for item in iterable], conditional comprehensions, nested loops, map/filter equivalents
- **Contoh**: Transformasi data, filtering
- **Latihan 1**: List comprehension untuk kuadrat bilangan
- **Latihan 2**: Flatten nested list

#### M03-L03: Tuples: Immutable Sequences
- **Konsep**: tuple creation, indexing/slicing, immutability, packing/unpacking, tuple vs list use cases
- **Contoh**: Multiple assignment, returning multiple values
- **Latihan 1**: Swap dua variabel dengan tuple unpacking
- **Latihan 2**: Fungsi mengembalikan multiple values

#### M03-L04: Dictionaries: Key-Value Mappings
- **Konsep**: dict creation, access (key error vs get), iteration (keys, values, items), methods (keys, values, get, pop, popitem, clear, update)
- **Contoh**: Phonebook sederhana
- **Latihan 1**: CRUD dictionary
- **Latihan 2**: Count word frequency

#### M03-L05: Dictionary Comprehensions and Dict Methods
- **Konsep**: {k:v for k,v in iterable}, conditional dict comprehensions, defaultdict, setdefault, update
- **Contoh**: Transformasi dictionary, filtering keys
- **Latihan 1**: Invert dictionary (swap key-value)
- **Latihan 2**: Merge dictionaries

#### M03-L06: Sets: Unordered Unique Collections
- **Konsep**: set creation, uniqueness, set operations (union |, intersection &, difference -, symmetric difference ^), methods (add, remove, discard, pop, clear), set comprehensions
- **Contoh**: Remove duplicates, membership test
- **Latihan 1**: Set operations sederhana
- **Latihan 2**: Unique elements dari list

---

### MODUL 4: Functions and Modular Programming
**Target**: M04-L01 sampai M04-L06 (6 lessons)

#### M04-L01: Defining and Calling Functions
- **Konsep**: def, return, parameters, scope (LEGB: Local, Enclosing, Global, Built-in), side effects
- **Contoh**: Fungsi sederhana, scope demonstration
- **Latihan 1**: Function untuk konversi suhu
- **Latihan 2**: Scope quiz

#### M04-L02: Arguments: Positional, Keyword, Default, and *args/**kwargs
- **Konsep**: Positional vs keyword, default parameters, *args (tuple), **kwargs (dict), unpacking (*list, **dict)
- **Contoh**: Flexible function signatures
- **Latihan 1**: Function dengan default parameters
- **Latihan 2**: Function yang menerima arbitrary arguments

#### M04-L03: Lambda Functions and Higher-Order Functions
- **Konsep**: lambda syntax, limitations, higher-order functions (map, filter, reduce), functools
- **Contoh**: Sorting dengan lambda, map/filter
- **Latihan 1**: Lambda untuk sort list of tuples
- **Latihan 2**: Implementasi manual map/filter

#### M04-L04: Docstrings, Type Hints, and Function Annotations
- **Konsep**: Docstring styles (Google/NumPy), type hints (PEP 484), typing module (List, Dict, Optional, Union, Callable), mypy
- **Contoh**: Function dengan docstring lengkap dan type hints
- **Latihan 1**: Tambah type hints ke fungsi yang ada
- **Latihan 2**: Buat docstring Google style

#### M04-L05: Modules and Packages
- **Konsep**: Module (.py file), package (folder + __init__.py), import statements (import, from...import, import...as), __all__, relative imports
- **Contoh**: Project structure multi-file
- **Latihan 1**: Buat package sederhana
- **Latihan 2**: Import modul dari package

#### M04-L06: The if __name__ == '__main__' Pattern
- **Konsep**: __name__ variable, executable vs importable, demo usage
- **Contoh**: Script yang bisa di-run dan di-import
- **Latihan 1**: Ubah script untuk support import
- **Latihan 2**: Package dengan executable module

---

### MODUL 5: Object-Oriented Programming (OOP)
**Target**: M05-L01 sampai M05-L07 (7 lessons)

#### M05-L01: Classes and Objects: Basics of OOP
- **Konsep**: class definition, instance creation, __init__, self, class vs instance
- **Contoh**: Class Person, Car
- **Latihan 1**: Class BankAccount dengan balance
- **Latihan 2**: Class Rectangle dengan width/height

#### M05-L02: Instance Variables, Class Variables, and Methods
- **Konsep**: Instance attributes (self.x), class attributes (ClassName.x), instance methods, class methods (@classmethod), static methods (@staticmethod)
- **Contoh**: Counter class dengan class variable
- **Latihan 1**: Class dengan instance dan class variables
- **Latihan 2**: Class methods untuk factory pattern

#### M05-L03: Inheritance and Method Resolution Order (MRO)
- **Konsep**: Subclassing, super(), multiple inheritance, MRO (method resolution order), diamond problem
- **Contoh**: Animal hierarchy, multiple inheritance mixins
- **Latihan 1**: Inheritance sederhana (Employee dari Person)
- **Latihan 2**: Multiple inheritance dengan super()

#### M05-L04: Encapsulation: Public, Private, and Protected
- **Konsep**: Naming conventions: public (name), protected (_name), private (__name), name mangling
- **Contoh**: Class dengan encapsulated attributes
- **Latihan 1**: Implementasi protected attribute
- **Latihan 2**: Private attribute dengan getter

#### M05-L05: Properties, Getters, and Setters
- **Konsep**: @property decorator, getter/setter pattern, computed properties, deleter
- **Contoh**: Temperature class dengan celsius/fahrenheit properties
- **Latihan 1**: Property untuk validasi input
- **Latihan 2**: Read-only property

#### M05-L06: Special (Dunder) Methods
- **Konsep**: __str__, __repr__, __len__, __getitem__, __setitem__, __delitem__, __iter__, __next__, __call__, __eq__, __lt__, arithmetic methods
- **Contoh**: Custom collection class
- **Latihan 1**: Implement __str__ dan __repr__
- **Latihan 2**: Class yang bisa di-index seperti list

#### M05-L07: Polymorphism and Duck Typing
- **Konsep**: Polymorphism (same interface, different behavior), duck typing ("if it walks like a duck..."), abstract base classes (ABC), NotImplementedError
- **Contoh**: Shape hierarchy (area method), duck typing dengan iterables
- **Latihan 1**: Polymorphic function
- **Latihan 2**: ABC untuk plugin system

---

### MODUL 6: Error Handling and Exceptions
**Target**: M06-L01 sampai M06-L04 (4 lessons)

#### M06-L01: Exceptions: try, except, else, finally
- **Konsep**: try-except, multiple except clauses, else (no exception), finally (cleanup), exception hierarchy (BaseException, Exception, specific exceptions)
- **Contoh**: File I/O error handling, ValueError, TypeError
- **Latihan 1**: Division dengan validasi
- **Latihan 2**: File reading dengan error handling

#### M06-L02: Raising Exceptions and Custom Exceptions
- **Konsep**: raise statement, custom exception classes (inherit from Exception or specific), adding attributes, exception chaining (from)
- **Contoh**: ValidationError custom exception
- **Latihan 1**: Raise exception untuk invalid input
- **Latihan 2**: Custom exception dengan message dan code

#### M06-L03: Context Managers and the with Statement
- **Konsep**: Context manager protocol (__enter__, __exit__), with statement, contextlib.contextmanager decorator, file handling
- **Contoh**: Timer context manager, file lock
- **Latihan 1**: Context manager untuk resource allocation
- **Latihan 2**: contextlib.contextmanager

#### M06-L04: Exception Chaining and Best Practices
- **Konsep**: raise from untuk preserve traceback, avoid bare except, specific exception catching, logging exceptions, customizing __str__
- **Contoh**: Chaining exceptions, re-raising
- **Latihan 1**: Exception chaining practice
- **Latihan 2**: Best practices refactoring

---

### MODUL 7: File I/O and Serialization
**Target**: M07-L01 sampai M07-L05 (5 lessons)

#### M07-L01: Reading and Writing Text Files
- **Konsep**: open() modes (r, w, a, x, b, t, +), encoding, context manager, read/readline/readlines, write/writelines, newline handling
- **Contoh**: Read entire file, line by line, write logs
- **Latihan 1**: Copy file
- **Latihan 2**: Count lines/words/characters

#### M07-L02: Working with CSV and JSON Data
- **Konsep**: csv module (reader, writer, DictReader, DictWriter), json module (load, loads, dump, dumps), indent, sort_keys
- **Contoh**: Read CSV to list of dicts, write JSON config
- **Latihan 1**: CSV parser sederhana
- **Latihan 2**: JSON configuration manager

#### M07-L03: Pickle and Binary Serialization
- **Konsep**: pickle.dump/load, pickle protocol, security warnings, shelve module
- **Contoh**: Save/load Python objects
- **Latihan 1**: Serialize complex object
- **Latihan 2**: Load and modify pickled data

#### M07-L04: Working with Paths: os.path and pathlib
- **Konsep**: os.path.join, split, dirname, basename, exists, isfile, isdir, pathlib.Path (OOP approach), / operator overloading
- **Contoh**: Path manipulations with both approaches
- **Latihan 1**: Path utilities (find files by extension)
- **Latihan 2**: pathlib untuk file organization

#### M07-L05: File System Operations
- **Konsep**: os.listdir, os.scandir, os.remove, os.rmdir, os.makedirs, shutil.copy, move, glob module
- **Contoh**: Directory cleanup, file organization
- **Latihan 1**: Recursive file finder
- **Latihan 2**: Backup directory

---

### MODUL 8: Advanced Python Concepts
**Target**: M08-L01 sampai M08-L06 (6 lessons)

#### M08-L01: Iterators and the Iterator Protocol
- **Konsep**: iter() function, next(), StopIteration, __iter__ dan __next__, custom iterator classes, iterable vs iterator
- **Contoh**: Custom range iterator, infinite iterator
- **Latihan 1**: Buat iterator untuk fibonacci
- **Latihan 2**: Iterator yang membatasi range

#### M08-L02: Generators and yield
- **Konsep**: Generator functions (yield), generator expressions, lazy evaluation, memory efficiency, send(), throw(), close()
- **Contoh**: Generator untuk large data streaming, infinite sequences
- **Latihan 1**: Generator untuk bilangan prima
- **Latihan 2**: Generator untuk file line processing

#### M08-L03: Decorators: Functions That Wrap Functions
- **Konsep**: Closure, decorator syntax (@), functools.wraps, decorator dengan arguments, class decorators, stacking decorators
- **Contoh**: Timer decorator, logging decorator, memoization
- **Latihan 1**: Decorator untuk validasi input
- **Latihan 2**: Decorator dengan parameters

#### M08-L04: Contextlib and Advanced Context Managers
- **Konsep**: contextlib.contextmanager, contextlib.suppress, contextlib.redirect_stdout, ExitStack, closing
- **Contoh**: Suppress errors, capture output
- **Latihan 1**: contextlib.contextmanager untuk resource
- **Latihan 2**: ExitStack untuk multiple resources

#### M08-L05: Descriptors and the Descriptor Protocol
- **Konsep**: Descriptor protocol (__get__, __set__, __delete__), data vs non-data descriptors, use cases (validation, lazy loading)
- **Contoh**: Type-checked descriptor, cached property
- **Latihan 1**: Descriptor untuk type enforcement
- **Latihan 2**: Descriptor untuk unit conversion

#### M08-L06: Metaclasses and Class Creation
- **Konsep**: type() as metaclass, custom metaclass (__new__, __init__), class creation hooks, when to use (framework development)
- **Contoh**: Singleton metaclass, automatic registration
- **Latihan 1**: Metaclass untuk enforce naming convention
- **Latihan 2**: Metaclass untuk add methods dynamically

---

### MODUL 9: Concurrency and Parallelism
**Target**: M09-L01 sampai M09-L05 (5 lessons)

#### M09-L01: Threading: Running Code Concurrently
- **Konsep**: threading.Thread, start/join, daemon threads, GIL, synchronization (Lock, RLock, Semaphore, Event, Condition), thread-local storage
- **Contoh**: Thread untuk I/O-bound tasks
- **Latihan 1**: Multi-thread downloader
- **Latihan 2**: Producer-consumer dengan threading

#### M09-L02: Multiprocessing: True Parallel Execution
- **Konsep**: multiprocessing.Process, Queue, Pipe, Pool, shared memory, GIL bypass for CPU-bound tasks
- **Contoh**: CPU-intensive computation parallelization
- **Latihan 1**: Parallel prime number finder
- **Latihan 2**: Process pool untuk image processing

#### M09-L03: Asyncio: Asynchronous I/O
- **Konsep**: async def, await, coroutine, event loop, asyncio.run, tasks, gather, wait, async context managers, async generators
- **Contoh**: Async web scraper, async chat server
- **Latihan 1**: Async fetch multiple URLs
- **Latihan 2**: Async prime finder

#### M09-L04: Concurrent Futures: ThreadPoolExecutor and ProcessPoolExecutor
- **Konsep**: concurrent.futures module, Executor API (submit, map), as_completed, timeout handling
- **Contoh**: Simplified concurrent code
- **Latihan 1**: ThreadPoolExecutor untuk I/O tasks
- **Latihan 2**: ProcessPoolExecutor untuk CPU tasks

#### M09-L05: Choosing the Right Concurrency Model
- **Konsep**: I/O-bound vs CPU-bound, threading (I/O), multiprocessing (CPU), asyncio (many I/O), comparison table
- **Contoh**: Decision flowchart
- **Latihan 1**: Analyze use case and choose model
- **Latihan 2**: Refactor between models

---

### MODUL 10: Testing, Debugging, and Best Practices
**Target**: M10-L01 sampai M10-L08 (8 lessons)

#### M10-L01: Writing Tests with unittest and pytest
- **Konsep**: unittest module (TestCase, assert methods), pytest (simpler, fixtures, parametrize), test discovery
- **Contoh**: Test-driven example
- **Latihan 1**: Write unittest for simple function
- **Latihan 2**: Convert unittest to pytest

#### M10-L02: Test-Driven Development (TDD) Workflow
- **Konsep**: Red-Green-Refactor cycle, writing tests first, design by contract
- **Contoh**: TDD for a small feature
- **Latihan 1**: TDD for calculator function
- **Latihan 2**: TDD for data structure

#### M10-L03: Debugging with pdb and IDE Debuggers
- **Konsep**: pdb.set_trace(), breakpoint(), commands (n, s, c, p, l, w), IDE breakpoints, watch expressions
- **Contoh**: Debugging a buggy function
- **Latihan 1**: Debug a recursive function
- **Latihan 2**: Find logic error with pdb

#### M10-L04: Logging: The Right Way to Print
- **Konsep**: logging module levels (DEBUG, INFO, WARNING, ERROR, CRITICAL), basicConfig, handlers (FileHandler, RotatingFileHandler), formatters, getLogger
- **Contoh**: Application logging setup
- **Latihan 1**: Configure multi-level logging
- **Latihan 2**: Log to file with rotation

#### M10-L05: Code Quality: PEP 8, Linters, and Formatters
- **Konsep**: PEP 8 rules, flake8, pylint, black (auto-formatter), isort (import sorting), pre-commit hooks
- **Contoh**: Before/after formatting
- **Latihan 1**: Fix PEP 8 violations
- **Latihan 2**: Setup pre-commit with black

#### M10-L06: Type Checking with mypy
- **Konsep**: mypy installation, running checks, common errors (incompatible types, missing attributes), type narrowing, TypedDict, Protocol
- **Contoh**: Type checking a module
- **Latihan 1**: Add type hints and run mypy
- **Latihan 2**: Fix mypy errors

#### M10-L07: Profiling and Performance Optimization
- **Konsep**: cProfile, pstats, timeit, line_profiler, memory_profiler, optimization strategies (algorithm, data structures, caching)
- **Contoh**: Profile a slow function
- **Latihan 1**: Profile and optimize
- **Latihan 2**: Compare algorithms performance

#### M10-L08: Packaging and Distributing Python Packages
- **Konsep**: pyproject.toml (modern), setup.py (legacy), build (python -m build), twine upload, versioning, dependencies
- **Contoh**: Minimal package structure
- **Latihan 1**: Create package structure
- **Latihan 2**: Build distribution

---

## Checklist Eksekusi

### Fase 1: Modul 2 (3 lessons)
- [ ] M02-L02.md
- [ ] M02-L03.md
- [ ] M02-L04.md

### Fase 2: Modul 3 (6 lessons)
- [ ] M03-L01.md
- [ ] M03-L02.md
- [ ] M03-L03.md
- [ ] M03-L04.md
- [ ] M03-L05.md
- [ ] M03-L06.md

### Fase 3: Modul 4 (6 lessons)
- [ ] M04-L01.md
- [ ] M04-L02.md
- [ ] M04-L03.md
- [ ] M04-L04.md
- [ ] M04-L05.md
- [ ] M04-L06.md

### Fase 4: Modul 5 (7 lessons)
- [ ] M05-L01.md
- [ ] M05-L02.md
- [ ] M05-L03.md
- [ ] M05-L04.md
- [ ] M05-L05.md
- [ ] M05-L06.md
- [ ] M05-L07.md

### Fase 5: Modul 6 (4 lessons)
- [ ] M06-L01.md
- [ ] M06-L02.md
- [ ] M06-L03.md
- [ ] M06-L04.md

### Fase 6: Modul 7 (5 lessons)
- [ ] M07-L01.md
- [ ] M07-L02.md
- [ ] M07-L03.md
- [ ] M07-L04.md
- [ ] M07-L05.md

### Fase 7: Modul 8 (6 lessons)
- [ ] M08-L01.md
- [ ] M08-L02.md
- [ ] M08-L03.md
- [ ] M08-L04.md
- [ ] M08-L05.md
- [ ] M08-L06.md

### Fase 8: Modul 9 (5 lessons)
- [ ] M09-L01.md
- [ ] M09-L02.md
- [ ] M09-L03.md
- [ ] M09-L04.md
- [ ] M09-L05.md

### Fase 9: Modul 10 (8 lessons)
- [ ] M10-L01.md
- [ ] M10-L02.md
- [ ] M10-L03.md
- [ ] M10-L04.md
- [ ] M10-L05.md
- [ ] M10-L06.md
- [ ] M10-L07.md
- [ ] M10-L08.md

**Total**: 50 files

---

## Catatan Eksekusi

1. Setiap file harus mengikuti template standar
2. Gunakan bahasa Indonesia untuk penjelasan (sesuai preferensi user)
3. Contoh kode harus Python 3.8+ (karena menggunakan f-strings)
4. Latihan harus memiliki template fungsi dan expected output
5. Referensi menggunakan link yang valid dan umum
6. Next Steps harus menuju lesson berikutnya dalam modul yang sama, atau ke modul berikutnya jika sudah akhir modul

---

## Timeline

- **Target**: Selesaikan semua 50 file dalam satu sesi
- **Batch Size**: 5-10 file per batch
- **Approach**: Eksekusi berurutan per modul untuk konsistensi

---

**Status**: READY TO EXECUTE
**Next Action**: Mulai Fase 1 - Modul 2