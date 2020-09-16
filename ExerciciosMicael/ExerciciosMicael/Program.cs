using System;
using System.Collections.Generic;
using System.Linq;

namespace ExerciciosMicael
{
    class Program
    {
        static void Main(string[] args)
        {
            int opcao = 0;
            do
            {
                Console.WriteLine("+---------------------------------------------------------------------------------------------------+");
                Console.WriteLine("| 1 - Elabore o programa que leia dois números e efectue a sua soma, mostrando o resultado no ecrã");
                Console.WriteLine("| 2 - Construa um programa que leia dois números e um operador e efectue a operação introduzida. ");
                Console.WriteLine("| 0 - Exit");


                while (true)
                {

                    Console.WriteLine("Escolha um dos seguintes exercícios.");
                    string requestvalue = Console.ReadLine();
                    bool isadigit = int.TryParse(requestvalue, out opcao);

                    if (isadigit)
                    {
                        break;
                    }
                }


                switch (opcao)
                {
                    case 0:
                        break;
                    case 1:
                        exercicio1_Refactor2();
                        break;
                    case 2:
                        exercicio2_Refactor();
                        break;

                }
            } while (opcao != 0);
        }

        // [tipo de visibilidade] [tipo de retorno] [nome do método] ([tipo de parametro] [nome do parametro]) 

        public static void exercicio1()
        {
            Console.WriteLine("Enter n1");
            int n1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter n2");
            int n2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("A soma é: " + (n1 + n2));


        }

        public static void exercicio1_Refactor1()
        {
            int valor1 = 0;
            int valor2 = 0;
            while (true)
            {
            Console.Write("Enter n1:");
            string valorescritonaconsola = Console.ReadLine();
            bool isadigit = int.TryParse(valorescritonaconsola, out valor1);

                if (isadigit)
                {
                    break;                    
                }
            }

            while (true)
            {

                Console.Write("Enter n2:");
                string valorescritonaconsola2 = Console.ReadLine();
                bool isadigit2 = int.TryParse(valorescritonaconsola2, out valor2);
                if (isadigit2)
                {
                    break;
                }
            }
            Console.WriteLine("A soma é igual a " + (valor1 + valor2));
        }

        public static void exercicio1_Refactor2()
        {
            int valor1 = ReadInt("Insira o primeiro número:");
            int valor2 = ReadInt("Insira o segundo número:");

            Console.WriteLine("A soma é igual a " + (valor1 + valor2));

        }

        public static int ReadInt(string message)
        {
            int result = 0;
            while (true)
            {

                Console.Write(message);
                string valorescritonaconsola = Console.ReadLine();
                bool isadigit = int.TryParse(valorescritonaconsola, out result);
                if (isadigit)
                {
                    return result;
                }
            }
        }
        public static void exercicio2()
        {
            Console.WriteLine("Enter n1");
            int n1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter the operator");
            string operador = Console.ReadLine();
            Console.WriteLine("Enter n2");
            int n2 = Convert.ToInt32(Console.ReadLine());

            switch (operador)
            {
                case "+":
                    Console.WriteLine("O resultado é " + (n1 + n2));
                    break;
                case "-":
                    Console.WriteLine("O resultado é " + (n1 - n2));
                    break;
                case "*":
                    Console.WriteLine("O resultado é " + (n1 * n2));
                    break;
                case "/":
                    Console.WriteLine("O resultado é " + (n1 / n2));
                    break;
                case "%":
                    Console.WriteLine("O resultado é " + (n1 % n2));
                    break;
                default:
                    Console.WriteLine("Operador errado!");
                    break;
            }
        }

        public static void exercicio2_Refactor()
        {
            int valor1 = 0;

        }

        public static void exercicio3()
        {
            for (int i = 1; i <= 100; i++)
            {
                int par = i % 2;
                if (par == 0)
                {
                    Console.WriteLine("Lista de números pares de 1 a 100: " + i);
                }
            }

            //Outra forma de se fazer
            //for (int i = 2; i <= 100; i+=2)
            //{

            //    Console.WriteLine("Lista de números pares de 1 a 100: " + i);
            //}
        }

        public static void ecercicio4()
        {

        }
        public static void exercicio5()
        {
            Console.WriteLine("Digite o que deseja converter em maiúsculo: ");
            string frase = Console.ReadLine();
            Console.WriteLine(frase.ToUpper());
            Console.WriteLine("Digite o que deseja converter em minúsculo: ");
            string frase1 = Console.ReadLine();
            Console.WriteLine(frase1.ToLower());
        }
        public static void exercicio6()
        {
            Console.WriteLine("Insira dois números e vamos ver qual é o menor.");
            Console.WriteLine("Numero 1: ");
            int n1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Numero 2: ");
            int n2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("O menor número é: " + (n1 < n2 ? n1 : n2));
        }
        public static void exercicio7()
        {
            Console.WriteLine("Insira três números e vamos ver qual é o maior.");
            Console.WriteLine("Numero 1: ");
            int n1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Numero 2: ");
            int n2 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Numero 2: ");
            int n3 = Convert.ToInt32(Console.ReadLine());

            if ((n1 > n2) && (n1 > n3))
            {
                Console.WriteLine("O maior número entre os três é: " + n1);
            }
            else if (n2 > n3)
            {
                Console.WriteLine("O maior número entre os três é: " + n2);
            }
            else { Console.WriteLine("O maior número entre os três é: " + n3); }

            //Ou esta solução

            /*int[] arr = new int[3];
            arr[0] = Convert.ToInt32(Console.ReadLine());
            arr.Max();
            List<int> numeros1 = arr.ToList();
            List<int> numeros = new List<int>(); 
            Console.WriteLine("Insira três números e vamos ver qual é o maior.");
            Console.WriteLine("Numero 1: ");
            numeros.Add(Convert.ToInt32(Console.ReadLine()));
            Console.WriteLine("Numero 2: ");
            numeros.Add(Convert.ToInt32(Console.ReadLine()));
            Console.WriteLine("Numero 2: ");
            numeros.Add(Convert.ToInt32(Console.ReadLine()));

           
            Console.WriteLine("O maior número entre os três é: " + numeros.Max()); */
        }
        public static void exercicio8()
        {
            Console.WriteLine("Insira a sua idade:");
            int idade = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("A sua idade em dias é: " + (idade * 365));
        }
        public static void exercicio9()
        {
            Console.WriteLine("Numero 1: ");
            int n1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Numero 2: ");
            int n2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Soma " + (n1 + n2) + " \nSubtração " + (n1 - n2) +
                " \nDividisão " + (n1 / n2) + " \nMultiplição " + (n1 * n2));
        }
        public static void exercicio10()
        {
            Console.WriteLine("Insira três números.");
            Console.WriteLine("Numero 1: ");
            float n1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Numero 2: ");
            float n2 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Numero 2: ");
            float n3 = Convert.ToInt32(Console.ReadLine());

            float media = ((n1 + n2 + n3) / 3);
            Console.WriteLine("A média aritmética é: " + media);
        }
        public static void test()
        {
            int valor = 0;
            while (true)
            {
                valor++;
                Console.WriteLine(valor);
                //switch (valor)
                //{
                //    case 10000:
                //        break;

                //    case 10003:
                //        return;
                //}

                if (valor == 10000)
                {
                    break;
                }
                if (valor == 10003)
                {
                    return;
                }

            }

        }
        public static void test2()
        {
            for (int i = 0; i < 10; i++)
            {
                if (i == 5)
                {
                    //break;
                    return;
                }
                Console.WriteLine(i);

            }

            Console.WriteLine("Final");

        }

    }
}
