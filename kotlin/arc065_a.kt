// ABC049C

import kotlin.system.exitProcess

fun main() {
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
