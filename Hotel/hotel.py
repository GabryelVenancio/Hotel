def validar_numero_decimal(mensagem):
    while True:
        try:
            numero = float(input(mensagem))
            if numero < 0:
                raise ValueError
            return numero
        except ValueError:
            print("Valor inválido. Por favor, insira um número decimal positivo.")

def validar_numero_inteiro(mensagem):
    while True:
        try:
            numero = int(input(mensagem))
            if numero < 0:
                raise ValueError
            return numero
        except ValueError:
            print("Valor inválido. Por favor, insira um número inteiro positivo.")

def validar_senha():
    senha = input("Por favor, insira sua senha: ")
    return senha == "2678"

def reservar_quarto():
    valor_diaria = validar_numero_decimal("Qual o valor padrão da diária? R$")
    num_diarias = validar_numero_inteiro("Quantas diárias serão necessárias? ")

    nome_hospede = input("Qual o nome do hóspede? ")

    num_quarto = 0
    while num_quarto < 1 or num_quarto > 20:
        num_quarto = validar_numero_inteiro("Qual o quarto para reserva? (1 - 20): ")
        if quartos_ocupados[num_quarto - 1]:
            print("Quarto Ocupado. Escolha outro.")
            num_quarto = 0
        else:
            quartos_ocupados[num_quarto - 1] = True

    valor_total = valor_diaria * num_diarias
    print(f"O valor de {num_diarias} dias de hospedagem é de R${valor_total:.2f}")
    confirmacao = input(f"{nome_hospede}, você confirma a hospedagem por {num_diarias} dias? (S/N): ")
    if confirmacao.upper() == 'S':
        print(f"{nome_hospede}, reserva efetuada. O valor total é de R${valor_total:.2f}.")
    else:
        print("Reserva não efetuada.")

def cadastrar_hospedes():
    valor_diaria = validar_numero_decimal("Qual o valor padrão da diária? R$")

    gratuidades = 0
    meias_hospedagens = 0
    total_custos = 0

    while True:
        nome_hospede = input("Qual o nome do Hóspede? (Digite 'PARE' para encerrar o cadastro) ")
        if nome_hospede.upper() == 'PARE':
            break

        idade_hospede = validar_numero_inteiro("Qual a idade do Hóspede? ")

        custo_diaria = valor_diaria
        if idade_hospede < 6:
            print(f"{nome_hospede} possui gratuidade.")
            gratuidades += 1
        elif idade_hospede > 60:
            custo_diaria /= 2
            print(f"{nome_hospede} paga meia.")
            meias_hospedagens += 1

        total_custos += custo_diaria
        print(f"{nome_hospede} cadastrado(a) com sucesso.")

    print(f"O valor total das hospedagens é: R${total_custos:.2f}; {gratuidades} gratuidade(s); {meias_hospedagens} meia(s)")

def eventos():
    eventos = []
    
    while True:
        print("\n=== Menu de Eventos ===")
        print("1. Adicionar Evento")
        print("2. Listar Eventos")
        print("3. Remover Evento")
        print("4. Sair do Menu de Eventos")
        
        escolha = input("Escolha uma opção: ")
        
        if escolha == "1":
            nome_evento = input("Nome do evento: ")
            data_evento = input("Data do evento (DD/MM/AAAA): ")
            eventos.append({"Nome": nome_evento, "Data": data_evento})
            print("Evento adicionado com sucesso!")
        
        elif escolha == "2":
            print("\n=== Lista de Eventos ===")
            if len(eventos) == 0:
                print("Nenhum evento registrado.")
            else:
                for idx, evento in enumerate(eventos, start=1):
                    print(f"{idx}. {evento['Nome']} - {evento['Data']}")
        
        elif escolha == "3":
            if len(eventos) == 0:
                print("Não há eventos para remover.")
            else:
                print("\n=== Remover Evento ===")
                for idx, evento in enumerate(eventos, start=1):
                    print(f"{idx}. {evento['Nome']} - {evento['Data']}")
                evento_remover = int(input("Informe o número do evento a ser removido: "))
                if evento_remover > 0 and evento_remover <= len(eventos):
                    evento_removido = eventos.pop(evento_remover - 1)
                    print(f"Evento '{evento_removido['Nome']}' removido com sucesso!")
                else:
                    print("Número de evento inválido.")
        
        elif escolha == "4":
            print("Saindo do Menu de Eventos...")
            break
        
        else:
            print("Opção inválida. Tente novamente.")

def abastecimento_carro():
    total_abastecido = 0
    odometro_anterior = 0
    odometro_atual = 0
    consumo_medio = 0
    
    while True:
        print("\n=== Menu de Abastecimento de Carro ===")
        print("1. Registrar Abastecimento")
        print("2. Verificar Consumo Médio")
        print("3. Verificar Total Abastecido")
        print("4. Sair do Menu de Abastecimento")
        
        escolha = input("Escolha uma opção: ")
        
        if escolha == "1":
            litros_abastecidos = float(input("Quantos litros foram abastecidos? "))
            valor_abastecido = float(input("Qual foi o valor total do abastecimento? "))
            odometro_atual = float(input("Informe o odômetro atual do carro: "))
            if odometro_anterior != 0:
                distancia_percorrida = odometro_atual - odometro_anterior
                consumo_atual = litros_abastecidos / distancia_percorrida
                print(f"Consumo atual: {consumo_atual:.2f} km/l")
                consumo_medio = (consumo_medio + consumo_atual) / 2
            total_abastecido += valor_abastecido
            odometro_anterior = odometro_atual
        
        elif escolha == "2":
            if consumo_medio != 0:
                print(f"O consumo médio de combustível é de {consumo_medio:.2f} km/l")
            else:
                print("Nenhum registro de consumo disponível.")
        
        elif escolha == "3":
            if total_abastecido != 0:
                print(f"O total abastecido até agora é de R${total_abastecido:.2f}")
            else:
                print("Nenhum registro de abastecimento disponível.")
        
        elif escolha == "4":
            print("Saindo do Menu de Abastecimento...")
            break
        
        else:
            print("Opção inválida. Tente novamente.")

def manutencao_ar_condicionado():
    while True:
        print("\n=== Menu de Manutenção de Ar-Condicionado ===")
        print("1. Agendar Manutenção")
        print("2. Verificar Status da Manutenção")
        print("3. Cancelar Manutenção")
        print("4. Sair do Menu de Manutenção de Ar-Condicionado")
        
        escolha = input("Escolha uma opção: ")
        
        if escolha == "1":
            data = input("Digite a data para a manutenção (DD/MM/AAAA): ")
            hora = input("Digite o horário para a manutenção (HH:MM): ")
            print(f"Manutenção agendada para {data} às {hora}.")
        
        elif escolha == "2":
            status = input("Digite o código de rastreamento da manutenção: ")
            print(f"O status da manutenção {status} é: Em andamento.")
        
        elif escolha == "3":
            codigo = input("Digite o código de rastreamento da manutenção que deseja cancelar: ")
            confirmacao = input(f"Tem certeza que deseja cancelar a manutenção {codigo}? (S/N): ")
            if confirmacao.upper() == "S":
                print(f"Manutenção {codigo} cancelada com sucesso.")
            else:
                print(f"Cancelamento da manutenção {codigo} abortado.")
        
        elif escolha == "4":
            print("Saindo do Menu de Manutenção de Ar-Condicionado...")
            break
        
        else:
            print("Opção inválida. Tente novamente.")

hospedes = {'João': 101, 'Maria': 102, 'Pedro': 103}

def pesquisar_cadastrar_hospede():
    nome = input("Digite o nome do hóspede para pesquisa ou 'novo' para cadastrar um novo hóspede: ")
    if nome.lower() == 'novo':
        cadastrar_hospede()
    elif nome in hospedes:
        print(f"{nome} está hospedado no quarto {hospedes[nome]}.")
    else:
        print(f"{nome} não está hospedado aqui.")

def cadastrar_hospede():
    nome = input("Digite o nome do novo hóspede: ")
    numero_quarto = input("Digite o número do quarto: ")
    hospedes[nome] = numero_quarto
    print(f"{nome} cadastrado com sucesso no quarto {numero_quarto}.")

def gerenciar_hotel():
    print(f"Bem-vindo ao {nome_hotel}!")
    nome_usuario = input("Qual é o seu nome? ")
    senha_correta = validar_senha()
    if senha_correta:
        print(f"Bem-vindo ao Hotel {nome_hotel}, {nome_usuario}. É um imenso prazer ter você por aqui!")

        while True:
            print("\nMenu de Opções:")
            print("1. Reservar Quarto")
            print("2. Cadastrar Hóspedes")
            print("3. Pesquisar ou Cadastrar Hóspedes")
            print("4. Eventos")
            print("5. Abastecimento de Carro")
            print("6. Manutenção de Ar-Condicionado")
            print("7. Sair")
            opcao = input("Por favor, selecione uma opção: ")

            if opcao == '1':
                reservar_quarto()
            elif opcao == '2':
                cadastrar_hospedes()
            elif opcao == '3':
                pesquisar_cadastrar_hospede()
            elif opcao == '4':
                eventos()
            elif opcao == '5':
                abastecimento_carro()
            elif opcao == '6':
                manutencao_ar_condicionado()
            elif opcao == '7':
                print(f"Muito obrigado e até logo, {nome_usuario}.")
                break
            else:
                print("Opção inválida. Por favor, tente novamente.")

nome_hotel = "Hotel Cleffs"
quartos_ocupados = [False] * 20
gerenciar_hotel()