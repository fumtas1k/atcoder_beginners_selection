// ABC087B - Coins

fun main() {
  val A = readLine()!!.toInt()
  val B = readLine()!!.toInt()
  val C = readLine()!!.toInt()
  val X = readLine()!!.toInt()

  var cnt = 0
  repeat(A + 1) repeatA@ { a ->
    repeat(B + 1) repeatB@ { b ->
      val c50 = X - (a * 500 + b * 100)
      if (c50 < 0) return@repeatA
      if (c50 % 50 != 0 || c50 / 50 > C) return@repeatB
      cnt++
    }
  }
  println(cnt)
}
