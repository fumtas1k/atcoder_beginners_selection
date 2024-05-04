// ABC049C - 白昼夢

import kotlin.system.exitProcess

fun main() {
  // 文字列を頭から見ていくとdreamerとdreamを見分けにくいため文字列を反転させる
  val FORMAT = listOf("dream", "dreamer", "erase", "eraser").map(String::reversed)
  val S = readLine()!!.reversed()
  var i = 0
  while (i < S.length) {
    var is_match = false
    FORMAT.forEach {
      if (is_match || !S.substring(i).startsWith(it)) return@forEach
      is_match = true
      i += it.length
    }
    if (is_match) continue
    println("NO")
    exitProcess(0)
  }
  println("YES")
}
