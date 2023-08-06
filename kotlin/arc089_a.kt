// ABC086C

import kotlin.system.exitProcess

fun main() {
  val N = readLine()!!.toInt()
  val TXY = listOf(listOf(0, 0, 0)) + List(N) { readLine()!!.split(" ").map(String::toInt) }

  (1 .. N).forEach { i ->
    val (t0, x0, y0) = TXY[i - 1]
    val (t1, x1, y1) = TXY[i]

    val dist = Math.abs(x0 - x1) + Math.abs(y0 - y1)
    val diffT = t1 - t0
    if (diffT < dist || diffT % 2 != dist % 2) {
      println("No")
      exitProcess(0)
    }
  }
  println("Yes")
}
