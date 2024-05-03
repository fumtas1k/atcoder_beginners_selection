// ABC083B - Some Sums

fun main() {
  val (N, A, B) = readLine()!!.split(" ").map(String::toInt)
  val ans = (1 .. N).filter {
    it.toString().sumOf { it - '0' } in (A .. B)
  }.sum()
  println(ans)
}
