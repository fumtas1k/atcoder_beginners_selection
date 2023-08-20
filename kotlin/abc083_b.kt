// ABC083B - Some Sums

fun main() {
  val (N, A, B) = readLine()!!.split(" ").map(String::toInt)
  val ans = (1 .. N).sumBy {
    val sum = it.toString().sumBy { it - '0' }
    if (sum in (A .. B)) it else 0
  }
  println(ans)
}
