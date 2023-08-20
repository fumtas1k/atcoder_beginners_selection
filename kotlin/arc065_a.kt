// ABC049C - 白昼夢

import kotlin.system.exitProcess

fun main() {
  // 文字列を頭から見ていくとdreamerとdreamを見分けにくいため文字列を反転させる
  val FORMAT = listOf("dream", "dreamer", "erase", "eraser").map { it.reversed() }
  val S = readLine()!!.reversed()
  var i = 0
  while (i < S.length) {
    var ok = false
    FORMAT.forEach {
      if (ok || !S.substring(i).startsWith(it)) return@forEach
      ok = true
      i += it.length
    }
    if (ok) continue
    println("NO")
    exitProcess(0)
  }
  println("YES")
}
