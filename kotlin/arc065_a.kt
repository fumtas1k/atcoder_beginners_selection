// ABC049C - 白昼夢

import kotlin.system.exitProcess

fun main() {
  // 文字列を頭から見ていくとdreamerとdreamを見分けにくいため文字列を反転させる
  val FORMAT = listOf("dream", "dreamer", "erase", "eraser").map(String::reversed)
  val S = readLine()!!.reversed()
  var i = 0
  while (i < S.length) {
    var isMatch = false
    FORMAT.forEach {
      if (isMatch || !S.substring(i).startsWith(it)) return@forEach
      isMatch = true
      i += it.length
    }
    if (isMatch) continue
    println("NO")
    exitProcess(0)
  }
  println("YES")
}
