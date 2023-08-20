// ABC085C - Otoshidama

import kotlin.system.exitProcess

fun main() {
  val (N, Y) = readLine()!!.split(" ").map(String::toInt)

  (0 .. N).forEach forEach10000@ { res10000 ->
    (0 .. N - res10000).forEach { res5000 ->
      val res1000 = (Y - (res10000 * 10_000 + res5000 * 5_000)) / 1_000
      if (res1000 < 0) return@forEach10000
      if (res10000 + res5000 + res1000 == N && res1000 * 1_000 + res5000 * 5_000 + res10000 * 10_000 == Y) {
        println("$res10000 $res5000 $res1000")
        exitProcess(0)
      }
    }
  }
  println("-1 -1 -1")
}
