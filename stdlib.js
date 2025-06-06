(function () {
  var Struct,
    _play_sound,
    _player,
    arch,
    argc,
    argv,
    ascii,
    base64_to_str,
    bin,
    carrega,
    chr,
    clear,
    cls,
    color,
    cproc,
    date,
    date_add,
    date_diff,
    date_sub,
    date_to_str,
    date_to_str2,
    dayjs,
    dayjs_customParseFormat,
    dayjs_ptbr,
    echo,
    env,
    escreve,
    exec,
    file_exists,
    find_files,
    fs,
    getenv,
    hash_md5,
    hash_sha256,
    hash_sha512,
    hex,
    input,
    input_password,
    int,
    invalid_int,
    jp,
    key,
    len,
    limpa,
    list_dir,
    listdir,
    load,
    load_yaml,
    md5,
    mostra,
    mydir,
    open,
    ord,
    os,
    path,
    path_exists,
    path_extract,
    path_join,
    pc,
    pid,
    play_sound,
    print,
    printf,
    py_struct,
    rand,
    random,
    read_lines,
    readlines,
    readln,
    recebe,
    ref,
    rl,
    salva,
    save,
    save_yaml,
    sha,
    shell,
    shell_get,
    str,
    str_to_base64,
    str_to_date,
    struct,
    uptime,
    util,
    value,
    write_lines,
    writelines,
    writeln,
    yaml;
  rl = require("readline-sync");
  fs = require("fs");
  jp = require("fs-jetpack");
  yaml = require("yaml");
  md5 = require("md5");
  sha = require("sha.js");
  os = require("os");
  path = require("path");
  cproc = require("child_process");
  util = require("util");
  pc = require("picocolors");
  py_struct = require("python-struct");
  dayjs = require("dayjs");
  dayjs_ptbr = require("dayjs/locale/pt-br");
  dayjs_customParseFormat = require("dayjs/plugin/customParseFormat");
  dayjs.locale(dayjs_ptbr);
  dayjs.extend(dayjs_customParseFormat);
  _play_sound = require("play-sound");
  _player = null;
  print = (s) => console.log(s);
  escreve = print;
  mostra = print;
  writeln = print;
  echo = print;
  printf = (...args) => print(util.format(...args));
  readln = () => rl.question();
  input = readln;
  recebe = input;
  input_password = (ch) => rl.question("", { hideEchoBack: true, mask: ch });
  clear = () => console.clear();
  cls = clear;
  limpa = clear;
  color = (c, s) => {
    var cores, cs;
    cores = {
      r: "redBright",
      g: "greenBright",
      b: "blueBright",
      c: "cyanBright",
      m: "magentaBright",
      y: "yellowBright",
      k: "gray",
      w: "white",
    };
    cs = cores[c[0].toLowerCase()] || "white";
    s = pc[cs](s);
    if (c[1] === "B") {
      s = pc.bold(s);
    } else if (c[1] === "I") {
      s = pc.italic(s);
    }
    return s;
  };
  load = (arq) => jp.read(arq);
  save = (arq, s) => jp.write(arq, s);
  carrega = load;
  salva = save;
  readlines = (arq) => {
    var s;
    s = jp.read(arq);
    return s.split("\n");
  };
  read_lines = readlines;
  writelines = (arq, linhas) => {
    var s;
    s = linhas.join("\n");
    return jp.write(arq, s);
  };
  write_lines = writelines;
  load_yaml = (arq) => yaml.parse(jp.read(arq));
  save_yaml = (arq, s) => jp.write(arq, yaml.stringify(s));
  open = (arquivo, modo = "r") => {
    var fd;
    fd = fs.openSync(arquivo, modo);
    return {
      read: function (size) {
        var buffer, bytesRead, stats;
        if (size != null) {
          buffer = Buffer.alloc(size);
          bytesRead = fs.readSync(fd, buffer, 0, size, null);
          return buffer.slice(0, bytesRead).toString();
        } else {
          stats = fs.statSync(arquivo);
          buffer = Buffer.alloc(stats.size);
          fs.readSync(fd, buffer, 0, buffer.length, 0);
          return buffer.toString();
        }
      },
      write: function (conteudo) {
        var buffer;
        buffer = Buffer.from(conteudo);
        return fs.writeSync(fd, buffer, 0, buffer.length);
      },
      close: function () {
        return fs.closeSync(fd);
      },
    };
  };
  hash_md5 = (s) => md5(s);
  hash_sha256 = (s) => sha("sha256").update(s).digest("hex");
  hash_sha512 = (s) => sha("sha512").update(s).digest("hex");
  mydir = () => process.cwd();
  path_join = (...args) => path.join(...args);
  path_extract = (arq) => path.parse(arq);
  file_exists = (arq) => jp.exists(arq);
  path_exists = file_exists;
  list_dir = (dir, pattern) =>
    jp.find(dir, { matching: pattern, recursive: false });
  listdir = list_dir;
  find_files = list_dir;
  exec = (cmd) => cproc.exec(cmd);
  shell = (cmd) => cproc.execSync(cmd, { stdio: "inherit" });
  shell_get = (cmd) => cproc.execSync(cmd).toString();
  int = (s) => parseInt(s);
  str = (i) => i.toString();
  bin = (x) => x.toString(2);
  hex = (x) => x.toString(16).toUpperCase();
  invalid_int = (x) => isNaN(x);
  ord = (ch) => ch.charCodeAt(0);
  ascii = ord;
  chr = (codigo) => String.fromCharCode(codigo);
  str_to_base64 = (s) => Buffer.from(s).toString("base64");
  base64_to_str = (codigo_base64) =>
    Buffer.from(codigo_base64, "base64").toString("utf-8");
  arch = () => os.arch();
  uptime = () => os.uptime();
  pid = () => process.pid;
  argv = (i) => process.argv[i];
  argc = () => process.argv.length;
  env = (s) => process.env[s];
  getenv = (s) => process.env[s];
  rand = (inicio, final) =>
    inicio + Math.floor(Math.random() * (final - inicio + 1));
  random = rand;
  date = (...args) => dayjs(...args);
  date_to_str = (d, formato = "DD/MM/YYYY") => d.format(formato);
  date_to_str2 = (d, formato = "DD/MMM/YYYY") => d.format(formato);
  str_to_date = (s, formato = "DD/MM/YYYY") => dayjs(s, formato);
  date_add = (d, x, unidade = "day") => d.add(x, unidade);
  date_sub = (d, x, unidade = "day") => d.subtract(x, unidade);
  date_diff = (d1, d2, unidade = "day") => d1.diff(d2, unidade);
  play_sound = function (arq) {
    if (_player === null) {
      _player = _play_sound({});
    }
    return _player.play(arq);
  };
  globalThis.round = Math.round;
  globalThis.floor = Math.floor;
  globalThis.ceil = Math.ceil;
  globalThis.max = Math.max;
  globalThis.min = Math.min;
  globalThis.abs = Math.abs;
  globalThis.pow = Math.pow;
  Array.prototype.add = function (item) {
    this.push(item);
    return this;
  };
  Array.prototype.append = Array.prototype.add;
  Array.prototype.delete = function (i) {
    if (i >= 0 && i < this.length) {
      this.splice(i, 1);
    }
    return this;
  };
  Array.prototype.del = Array.prototype.delete;
  Array.prototype.clear = function () {
    this.length = 0;
    return this;
  };
  Array.prototype.index_of = function (item) {
    return this.indexOf(item);
  };
  Array.prototype.sort_by = function (fn) {
    this.sort(function (a, b) {
      return fn(a) - fn(b);
    });
    return this;
  };
  Array.prototype.min = function () {
    return Math.min.apply(null, this);
  };
  Array.prototype.max = function () {
    return Math.max.apply(null, this);
  };
  Array.prototype.sum = function () {
    return this.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
  };
  len = function (s) {
    return s.length;
  };
  String.prototype.strip = function () {
    return this.trim();
  };
  String.prototype.lower = function () {
    return this.toLowerCase();
  };
  String.prototype.upper = function () {
    return this.toUpperCase();
  };
  String.prototype.is_digit = function () {
    return /^[0-9]+$/.test(this);
  };
  String.prototype.is_alpha = function () {
    return /^[a-zA-Z]+$/.test(this);
  };
  String.prototype.is_alnum = function () {
    return /^[a-zA-Z0-9]+$/.test(this);
  };
  String.prototype.is_space = function () {
    return /^\s+$/.test(this);
  };
  String.prototype.is_lower = function () {
    return /^[a-z]+$/.test(this);
  };
  String.prototype.is_upper = function () {
    return /^[A-Z]+$/.test(this);
  };
  Struct = class Struct {
    constructor(...args) {
      var N, fieldName, fieldType, i, info, j, ref;
      info = { fieldNames: [], fieldTypes: [], fieldFormatAll: "< " };
      for (i = j = 0, ref = args.length; j < ref; i = j += 2) {
        fieldType = args[i];
        fieldName = args[i + 1];
        if (fieldType.startsWith("char[") && fieldType.endsWith("]")) {
          N = fieldType.slice(5, -1);
          fieldType = N + "s";
        } else {
          switch (fieldType) {
            case "int":
              fieldType = "i";
              break;
            case "unsigned int":
              fieldType = "I";
              break;
            case "char":
              fieldType = "c";
              break;
            case "signed char":
              fieldType = "b";
              break;
            case "unsigned char":
              fieldType = "B";
              break;
            case "short":
              fieldType = "h";
              break;
            case "unsigned short":
              fieldType = "H";
              break;
            case "float":
              fieldType = "f";
              break;
            case "double":
              fieldType = "d";
          }
        }
        info.fieldNames.push(fieldName);
        info.fieldTypes.push(fieldType);
        info.fieldFormatAll += fieldType + " ";
        Object.defineProperty(this, fieldName, {
          writable: true,
          enumerable: true,
        });
      }
      info.size = py_struct.sizeOf(info.fieldFormatAll);
      Object.defineProperty(this, "_info", {
        writable: true,
        enumerable: false,
      });
      this._info = info;
    }
    load_from_data(data) {
      var i, name, ref, results, values;
      values = py_struct.unpack(this._info.fieldFormatAll, data);
      ref = this._info.fieldNames;
      results = [];
      for (i in ref) {
        name = ref[i];
        results.push((this[name] = values[i]));
      }
      return results;
    }
    save_to_data() {
      var j, len1, name, ref, values;
      values = [];
      ref = this._info.fieldNames;
      for (j = 0, len1 = ref.length; j < len1; j++) {
        name = ref[j];
        values.push(this[name]);
      }
      return py_struct.pack(this._info.fieldFormatAll, ...values);
    }
    load_from_file(filename) {
      var data;
      data = fs.readFileSync(filename);
      return this.load_from_data(data);
    }
    save_to_file(filename) {
      var data;
      data = this.save_to_data();
      return fs.writeFileSync(filename, data);
    }
    dump() {
      var fieldName, fieldSize, fieldType, i, j, ref;
      for (
        i = j = 0, ref = this._info.fieldNames.length;
        0 <= ref ? j < ref : j > ref;
        i = 0 <= ref ? ++j : --j
      ) {
        fieldName = this._info.fieldNames[i];
        fieldType = this._info.fieldTypes[i];
        fieldSize = py_struct.sizeOf(fieldType);
        console.log(`- ${fieldName}: ${fieldType}; sizeof = ${fieldSize}`);
      }
      console.log(`(formato completo: '${this._info.fieldFormatAll}')`);
      return console.log(`(sizeof total: ${this._info.size})`);
    }
    size() {
      return this._info.size;
    }
    size_of() {
      return this._info.size;
    }
  };
  struct = function (...args) {
    return new Struct(...args);
  };
  module.exports = {
    print: print,
    writeln: writeln,
    echo: echo,
    printf: printf,
    readln: readln,
    input: input,
    input_password: input_password,
    clear: clear,
    cls: cls,
    color: color,
    load: load,
    save: save,
    load_yaml: load_yaml,
    save_yaml: save_yaml,
    open: open,
    readlines: readlines,
    read_lines: read_lines,
    writelines: writelines,
    write_lines: write_lines,
    hash_md5: hash_md5,
    hash_sha256: hash_sha256,
    hash_sha512: hash_sha512,
    mydir: mydir,
    path_join: path_join,
    path_extract: path_extract,
    file_exists: file_exists,
    path_exists: path_exists,
    list_dir: list_dir,
    listdir: listdir,
    find_files: find_files,
    exec: exec,
    shell: shell,
    shell_get: shell_get,
    int: int,
    str: str,
    bin: bin,
    hex: hex,
    invalid_int: invalid_int,
    ord: ord,
    ascii: ascii,
    chr: chr,
    str_to_base64: str_to_base64,
    base64_to_str: base64_to_str,
    arch: arch,
    uptime: uptime,
    pid: pid,
    argv: argv,
    argc: argc,
    env: env,
    getenv: getenv,
    rand: rand,
    random: random,
    date: date,
    date_to_str: date_to_str,
    date_to_str2: date_to_str2,
    str_to_date: str_to_date,
    date_add: date_add,
    date_sub: date_sub,
    date_diff: date_diff,
    len: len,
    struct: struct,
    play_sound: play_sound,
    escreve: escreve,
    mostra: mostra,
    recebe: recebe,
    limpa: limpa,
    carrega: carrega,
    salva: salva,
  };
  ref = module.exports;
  for (key in ref) {
    value = ref[key];
    globalThis[key] = value;
  }
}).call(this);
