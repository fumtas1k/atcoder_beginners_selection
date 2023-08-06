// ABC088B

fun main() {
  readLine()!!
  val A = readLine()!!.split(" ").map(String::toInt).sorted().reversed()
  val diff = A.filterIndexed { i, _ -> i % 2 == 0 }.sum() - A.filterIndexed { i, _ -> i % 2 == 1 }.sum()
  println(diff)
}
