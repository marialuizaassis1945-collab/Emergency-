import { useState } from "react";

// ─── DADOS REAIS — Semana 24 ──────────────────────────────────────────────
const CRONOGRAMA_REAL = [{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":2,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"ELÉTRICA/INSTRUMENTAÇÃO","Oficina":"","Grupo_Oficina":"","Matriz":334,"Duracao_horas":40.0,"Dia_Semana":"","Inicio_ISO":"2026-06-08","Recursos":""},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":5,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"TODOS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":6,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"ATENDIMENTO À PARADA DO PÁTIO 2 LINHA 103","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"AGILDO;FLAVIO;GILSON;VIT"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":7,"Tipo_OM":"PM03","Ordem":"31792926","LI_TAG":"125BB006M","Descricao_Tarefa":"MPCO-02-09S-ROTA INSP. SENSITIVA 125","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":3.5,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"ELIEL"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":8,"Tipo_OM":"PM02","Ordem":"31980932","LI_TAG":"165BB007MB","Descricao_Tarefa":"MOTOR ELÉTRICO COM DEFEITO DE ROLAMENTO (PREPARATIVO)","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":23,"Duracao_horas":3.5,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"RAFAEL"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":9,"Tipo_OM":"PM02","Ordem":"31813394","LI_TAG":"155DJ006EA","Descricao_Tarefa":"COMPLETAR ÓLEO E AVALIAR VAZAMENTO DISJU","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":13,"Duracao_horas":4.0,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"ELIEL;RAFAEL"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":10,"Tipo_OM":"PM03","Ordem":"31995970","LI_TAG":"111BB002M","Descricao_Tarefa":"MPCO-26-09S-ROTA INSP. SENSITIVA 111","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":2.0,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"MATEUS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":11,"Tipo_OM":"PM03","Ordem":"31792952","LI_TAG":"124BB003M","Descricao_Tarefa":"MPCO-16-09S-ROTA INSP. SENSITIVA 124","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":2.0,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"MATEUS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":12,"Tipo_OM":"PM03","Ordem":"32054544","LI_TAG":"324RS402G","Descricao_Tarefa":"MPCO-37 -04S-ROTA INSP. SENSITIVA ELE","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":2.0,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"MATEUS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":13,"Tipo_OM":"PM03","Ordem":"31970042","LI_TAG":"363CR001AM","Descricao_Tarefa":"MPCO-11-09S-ROTA INSP. SENSITIVA 363","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":1.5,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"MATEUS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":15,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"TODOS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":16,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"ATENDIMENTO À PARADA DO PÁTIO 2 LINHA 103","Oficina":"ELELF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"ELVIS;WAGNER"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":17,"Tipo_OM":"PM05","Ordem":"31935009","LI_TAG":"384LG001","Descricao_Tarefa":"LIMPEZA NAS LENTES DOS LASER LOGMETTER 1","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"DOUGLAS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":18,"Tipo_OM":"PM05","Ordem":"31962275","LI_TAG":"111XS305","Descricao_Tarefa":"PM05-DT 13 F1 DT PREVENTIVA DETECTOR MET","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":3.5,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"ROSIMAR"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":19,"Tipo_OM":"PM05","Ordem":"32055250","LI_TAG":"121PT009","Descricao_Tarefa":"MPCO-01S-ILIMP. TOMADAS-TRANS_PRESSÃO","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":4.0,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"ROSIMAR"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":22,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"TODOS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":23,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"ATENDIMENTO À PARADA DO PÁTIO 2 LINHA 103","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"AGILDO;FLAVIO;GILSON;VIT"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":24,"Tipo_OM":"PM02","Ordem":"30662556","LI_TAG":"199BB001","Descricao_Tarefa":"SUBSTITUIR MOTOR ELETRICO/DEFEITO ROLAM.","Oficina":"MECLF01","Grupo_Oficina":"ELÉTRICA","Matriz":27,"Duracao_horas":3.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"ELIEL"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":25,"Tipo_OM":"PM03","Ordem":"32060607","LI_TAG":"322BB204M","Descricao_Tarefa":"MPCO-24-04S-ROTA INSP. SENSITIVA 322","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":4.0,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"ELIEL"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":26,"Tipo_OM":"PM02","Ordem":"32112811","LI_TAG":"320SE","Descricao_Tarefa":"CONFIGURAR RESET AUTO. NOS INVERSORES.","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":18,"Duracao_horas":7.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"MATEUS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":27,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"TREINAMENTO ONLINE","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":3.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"RAFAEL"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":28,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"TREINAMENTO NR06","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":2.0,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"RAFAEL"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":29,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"TREINAMENTO ONLINE","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":2.0,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"RAFAEL"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":31,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"TODOS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":32,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"ATENDIMENTO À PARADA DO PÁTIO 2 LINHA 103","Oficina":"ELELF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"ELVIS;WAGNER"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":33,"Tipo_OM":"PM02","Ordem":"29220539","LI_TAG":"363FT121","Descricao_Tarefa":"SUBSTITUIR MEDIDOR DE VAZÃO DE ÁCIDO","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":23,"Duracao_horas":3.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"DOUGLAS;FABIANO"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":34,"Tipo_OM":"PM02","Ordem":"32026755","LI_TAG":"325FV036","Descricao_Tarefa":"REESTABELECER CABOS","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":23,"Duracao_horas":4.0,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"DOUGLAS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":35,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"TREINAMENTO NR06","Oficina":"","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":4.0,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"FABIANO"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":36,"Tipo_OM":"PM05","Ordem":"32047581","LI_TAG":"121LT005","Descricao_Tarefa":"PM05-CB-ROTA DE PURGA DIGESTOR","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":4.0,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"ROSIMAR"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":37,"Tipo_OM":"PM03","Ordem":"32023637","LI_TAG":"124HV007","Descricao_Tarefa":"MPCO-P67-13S-ROTA INSP. SENSITIVA 124","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":3.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"ROSIMAR"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":40,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"TODOS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":41,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"ATENDIMENTO À PARADA DO PÁTIO 2 LINHA 103","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"AGILDO;FLAVIO;GILSON;VIT"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":42,"Tipo_OM":"PM02","Ordem":"31758667","LI_TAG":"325RA501M","Descricao_Tarefa":"SUBSTITUIÇÃO MOTOR ELETRICO (APOIO MECÂNICA + MUNCK)","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":23,"Duracao_horas":3.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"ELIEL;RAFAEL"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":43,"Tipo_OM":"PM02","Ordem":"30265124","LI_TAG":"360TFEF72","Descricao_Tarefa":"SUBSTITUIR CONTROLADOR DE TEMPERATURA","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":18,"Duracao_horas":4.0,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"ELIEL;RAFAEL"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":44,"Tipo_OM":"PM02","Ordem":"32112811","LI_TAG":"320SE","Descricao_Tarefa":"CONFIGURAR RESET AUTO. NOS INVERSORES.","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":18,"Duracao_horas":1.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"MATEUS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":45,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"PARTICIPAÇÃO REUNIÃO A3 DE DRIVES","Oficina":"","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":2.0,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"MATEUS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":46,"Tipo_OM":"PM02","Ordem":"32112811","LI_TAG":"320SE","Descricao_Tarefa":"CONFIGURAR RESET AUTO. NOS INVERSORES.","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":18,"Duracao_horas":4.0,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"MATEUS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":48,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"TODOS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":49,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"ATENDIMENTO À PARADA DO PÁTIO 2 LINHA 103","Oficina":"ELELF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":3.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"ELVIS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":50,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"TREINAMENTO NR35","Oficina":"","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":3.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"FABIANO"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":51,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"ATENDIMENTO À PARADA DO PÁTIO 2 LINHA 103","Oficina":"ELELF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":4.0,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"ELVIS;FABIANO"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":52,"Tipo_OM":"PM02","Ordem":"32026768","LI_TAG":"325FV094","Descricao_Tarefa":"REESTABELECER CABOS","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":23,"Duracao_horas":7.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"DOUGLAS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":53,"Tipo_OM":"PM05","Ordem":"32043564","LI_TAG":"321PDT109","Descricao_Tarefa":"MPSI-01SM-ROTA PURGA-E-PREVENTIVA","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"ROSIMAR"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":54,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"COBRINDO TURNO","Oficina":"","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"WAGNER"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":57,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"TODOS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":58,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"ATENDIMENTO À PARADA DO PÁTIO 2 LINHA 103","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"AGILDO;FLAVIO;GILSON;VIT"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":59,"Tipo_OM":"PM02","Ordem":"31373204","LI_TAG":"166EX100BM","Descricao_Tarefa":"SUBSTITUIR MOTOR ELÉTRICO","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":19,"Duracao_horas":3.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"ELIEL;MATEUS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":60,"Tipo_OM":"PM02","Ordem":"31814514","LI_TAG":"121SP040M3","Descricao_Tarefa":"SUBSTITUIR MOTOR ELETRICO","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":18,"Duracao_horas":4.0,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"ELIEL;MATEUS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":61,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"TREINAMENTO NR33","Oficina":"","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":3.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"RAFAEL"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":62,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"TREINAMENTO ONLINE","Oficina":"","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":4.0,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"RAFAEL"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":64,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"TODOS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":65,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"ATENDIMENTO À PARADA DO PÁTIO 2 LINHA 103","Oficina":"ELELF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"ELVIS;FABIANO"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":66,"Tipo_OM":"PM02","Ordem":"32026771","LI_TAG":"325FV076","Descricao_Tarefa":"REESTABELECER CABOS","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":23,"Duracao_horas":7.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"DOUGLAS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":67,"Tipo_OM":"PM05","Ordem":"32046723","LI_TAG":"321FV112","Descricao_Tarefa":"PM05-MONIT. VÁLVULAS SINDUS OPP GECEL","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"ROSIMAR"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":68,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"COBRINDO TURNO","Oficina":"","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"WAGNER"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":71,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"TODOS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":72,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"ATENDIMENTO À PARADA DO PÁTIO 2 LINHA 103","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"AGILDO;FLAVIO;GILSON;VIT"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":73,"Tipo_OM":"PM03","Ordem":"31968971","LI_TAG":"121SP040M1","Descricao_Tarefa":"MPCO-04-04S-ROTA INSP. SENSITIVA 121","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":2.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"ELIEL;MATEUS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":74,"Tipo_OM":"PM03","Ordem":"31978793","LI_TAG":"124BB028M1","Descricao_Tarefa":"MPCO-15-04S-ROTA INSP. SENSITIVA 124","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":1.0,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"ELIEL"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":75,"Tipo_OM":"PM03","Ordem":"32017895","LI_TAG":"111TF001M","Descricao_Tarefa":"MPCO-25-04S-ROTA INSP. SENSITIVA 111","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":4.0,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"ELIEL"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":76,"Tipo_OM":"PM03","Ordem":"31868526","LI_TAG":"321FI101M","Descricao_Tarefa":"MPCO-06-09S-ROTA INSP. SENSITIVA 321","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":1.0,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"MATEUS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":77,"Tipo_OM":"PM03","Ordem":"32060616","LI_TAG":"360QTR001G","Descricao_Tarefa":"MPCO-42 -04S-ROTA INSP SENSITIVA 360 ELE","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":4.0,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"MATEUS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":78,"Tipo_OM":"PM03","Ordem":"31994817","LI_TAG":"12","Descricao_Tarefa":"PM03 - INSP SENSITIVA SPDA GECEL","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":6.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"RAFAEL"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":79,"Tipo_OM":"PM04","Ordem":"32059287","LI_TAG":"321BB101M","Descricao_Tarefa":"MPSI-SEM-PREDITIVA METRIS-MOTORES","Oficina":"ELELF01","Grupo_Oficina":"ELÉTRICA","Matriz":0,"Duracao_horas":1.0,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"RAFAEL"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":81,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"TODOS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":82,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"ATENDIMENTO À PARADA DO PÁTIO 2 LINHA 103","Oficina":"ELELF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"ELVIS;WAGNER"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":83,"Tipo_OM":"PM02","Ordem":"32026738","LI_TAG":"325DT501","Descricao_Tarefa":"REESTABELECER CABOS","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":23,"Duracao_horas":7.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"DOUGLAS"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":84,"Tipo_OM":"PM02","Ordem":"32009463","LI_TAG":"166AT108","Descricao_Tarefa":"VERIFICAR MEDIDOR DE DENSIDADE GERADOR","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":24,"Duracao_horas":2.0,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"FABIANO"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":85,"Tipo_OM":"PM03","Ordem":"31945873","LI_TAG":"110QDI110","Descricao_Tarefa":"MPCO-P55-13S-ROTA INSP. SENSITIVA 110","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":1.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"FABIANO"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":86,"Tipo_OM":"PM05","Ordem":"32063321","LI_TAG":"321FV102","Descricao_Tarefa":"PM05-DT OPP-VALVES LINHA DE FIBRAS 2","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":4.0,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"FABIANO"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":87,"Tipo_OM":"PM05","Ordem":"32006611","LI_TAG":"321LT111","Descricao_Tarefa":"MPSI-01SM-ROTA PURGA-E-PREVENTIVA","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":4.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"ROSIMAR"},{"Arquivo_Origem":"EEI_Eletrica_Instrumentacao","Id":88,"Tipo_OM":"PM03","Ordem":"32055244","LI_TAG":"322LV017","Descricao_Tarefa":"MPCO-71-04S-ROTA INSP. SENSITIVA 322","Oficina":"INSLF01","Grupo_Oficina":"INSTRUMENTAÇÃO","Matriz":0,"Duracao_horas":3.0,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"ROSIMAR"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":2,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"MECÂNICA/HIDRAULICA/CALDEIRARIA","Oficina":"","Grupo_Oficina":"","Matriz":632,"Duracao_horas":40.0,"Dia_Semana":"","Inicio_ISO":"2026-06-08","Recursos":""},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":5,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"TODOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":6,"Tipo_OM":"PM05","Ordem":"31943854","LI_TAG":"122DP027","Descricao_Tarefa":"MPSI-03MS-MECLF01-M-PREV.122DP027","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"TIAGO;JONAS;LUIS ROMÁRIO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":7,"Tipo_OM":"PM05","Ordem":"31997964","LI_TAG":"363FX110","Descricao_Tarefa":"PM05 - PREVENTIVA FILTROS DA PLANTA","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"WANDERLEY;CLOVIS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":8,"Tipo_OM":"PM02","Ordem":"32051786","LI_TAG":"311MA103","Descricao_Tarefa":"SINERGIA PP PÁTIO DE MADEIRA L103","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":18,"Duracao_horas":7.5,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"HERBERT + 02 PAYMEC"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":10,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"TODOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":11,"Tipo_OM":"PM05","Ordem":"32038539","LI_TAG":"124PS054","Descricao_Tarefa":"PM05 - ROTA PRENSAS COMPACT PRESS HID","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":0,"Duracao_horas":4.0,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"ANTONIO CLAUDIO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":12,"Tipo_OM":"PM03","Ordem":"32046725","LI_TAG":"121UH030","Descricao_Tarefa":"MPCO-1-7DS-121-M ROTA INSP SENS UH's LF","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":0,"Duracao_horas":3.5,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"ANTONIO CLAUDIO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":13,"Tipo_OM":"PM03","Ordem":"32046726","LI_TAG":"121UH023","Descricao_Tarefa":"MPCO-7-7DS-121-M ROTA INSP SENS NIT DIF","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":0,"Duracao_horas":3.5,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"EDMAR"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":14,"Tipo_OM":"PM03","Ordem":"32046727","LI_TAG":"122UH033","Descricao_Tarefa":"MPCO-2-7DS-122-M ROTA INSP SENS UH's LF","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":0,"Duracao_horas":4.0,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"EDMAR"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":16,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"CALLF01","Grupo_Oficina":"CALDEIRARIA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"TODOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":17,"Tipo_OM":"PM02","Ordem":"32052444","LI_TAG":"325TE502","Descricao_Tarefa":"DNA TRAVAR GUARDA CORPO ELEMENTO DE FIXAÇÃO","Oficina":"CALLF01","Grupo_Oficina":"CALDEIRARIA","Matriz":18,"Duracao_horas":7.5,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"SAULO;CARLOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":18,"Tipo_OM":"PM02","Ordem":"32051786","LI_TAG":"311MA103","Descricao_Tarefa":"SINERGIA PP PÁTIO DE MADEIRA L103","Oficina":"CALLF01","Grupo_Oficina":"CALDEIRARIA","Matriz":18,"Duracao_horas":7.5,"Dia_Semana":"SEGUNDA-FEIRA","Inicio_ISO":"2026-06-08","Recursos":"RAIMUNDO;CALIXTO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":21,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"TODOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":22,"Tipo_OM":"PM03","Ordem":"32036802","LI_TAG":"322CAP201","Descricao_Tarefa":"MPCO-1-7DS-322-M INSP CHUV ALTA PRES DDW","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":0,"Duracao_horas":4.0,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"TIAGO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":23,"Tipo_OM":"PM03","Ordem":"32047068","LI_TAG":"121","Descricao_Tarefa":"MPCO-96-14DS-121-M INSP SENSIT MEC RT2","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":0,"Duracao_horas":3.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"TIAGO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":24,"Tipo_OM":"PM05","Ordem":"32038347","LI_TAG":"121RS022","Descricao_Tarefa":"PM05 ROTA GAXETA LINHA DE FIBRA","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":0,"Duracao_horas":3.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"LUIS ROMARIO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":25,"Tipo_OM":"PM05","Ordem":"32055985","LI_TAG":"124PS054","Descricao_Tarefa":"PM05 - ROTA PRENSAS COMPACT PRESS MEC","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":0,"Duracao_horas":3.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"HERBERT"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":26,"Tipo_OM":"PM02","Ordem":"32111955","LI_TAG":"187PRA001","Descricao_Tarefa":"BOM SENSO LINHA DE FIBRAS L2","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":18,"Duracao_horas":4.0,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"LUIS ROMARIO;HERBERT"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":27,"Tipo_OM":"PM03","Ordem":"32023639","LI_TAG":"121","Descricao_Tarefa":"MPCO-85-14DS-121-M INSP SENSIT MEC RT1","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":0,"Duracao_horas":3.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"JONAS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":28,"Tipo_OM":"PM02","Ordem":"32051834","LI_TAG":"125UH042","Descricao_Tarefa":"APOIO AMOSTRAGEM ANDAIMES PG L1 LF","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":12,"Duracao_horas":3.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"CLOVIS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":29,"Tipo_OM":"PM02","Ordem":"30662556","LI_TAG":"199BB001","Descricao_Tarefa":"SUBSTITUIR MOTOR ELETRICO/DEFEITO ROLAM.","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":27,"Duracao_horas":4.0,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"JONAS;CLOVIS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":30,"Tipo_OM":"PM02","Ordem":"32051786","LI_TAG":"311MA103","Descricao_Tarefa":"SINERGIA PP PÁTIO DE MADEIRA L103","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":18,"Duracao_horas":7.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"PINOTI + 02 PAYMEC"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":32,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"TODOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":33,"Tipo_OM":"PM03","Ordem":"32046730","LI_TAG":"321UH101","Descricao_Tarefa":"MPCO-2-7DS-321-M ROTA INSP SENS UH's LF","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":0,"Duracao_horas":4.0,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"ANTONIO CLAUDIO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":34,"Tipo_OM":"PM03","Ordem":"32046731","LI_TAG":"322UH201","Descricao_Tarefa":"MPCO-2-7DS-322-M ROTA INSP SENS UH's LF","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":0,"Duracao_horas":3.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"ANTONIO CLAUDIO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":35,"Tipo_OM":"PM03","Ordem":"32055004","LI_TAG":"324UH401","Descricao_Tarefa":"MPCO-6-7DS-324-M ROTA INSP SENS UH's LF","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"EDMAR"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":37,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"CALLF01","Grupo_Oficina":"CALDEIRARIA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"TODOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":38,"Tipo_OM":"PM02","Ordem":"32086154","LI_TAG":"125DF036","Descricao_Tarefa":"DNA - 202605037904 SUBSTITUIR DEGRAU GRADE PISO DIFUSOR","Oficina":"CALLF01","Grupo_Oficina":"CALDEIRARIA","Matriz":18,"Duracao_horas":7.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"SAULO;CARLOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":39,"Tipo_OM":"PM02","Ordem":"32051786","LI_TAG":"311MA103","Descricao_Tarefa":"SINERGIA PP PÁTIO DE MADEIRA L103","Oficina":"CALLF01","Grupo_Oficina":"CALDEIRARIA","Matriz":18,"Duracao_horas":7.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"RAIMUNDO;CALIXTO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":40,"Tipo_OM":"PM02","Ordem":"32051786","LI_TAG":"311MA103","Descricao_Tarefa":"SINERGIA PP PÁTIO DE MADEIRA L103","Oficina":"CALLF01","Grupo_Oficina":"CALDEIRARIA","Matriz":18,"Duracao_horas":4.0,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"FÁBIO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":41,"Tipo_OM":"PM02","Ordem":"32111955","LI_TAG":"187PRA001","Descricao_Tarefa":"TREINAMENTO NR06","Oficina":"CALLF01","Grupo_Oficina":"CALDEIRARIA","Matriz":18,"Duracao_horas":3.5,"Dia_Semana":"TERÇA-FEIRA","Inicio_ISO":"2026-06-09","Recursos":"FÁBIO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":44,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"TODOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":45,"Tipo_OM":"PM05","Ordem":"32038352","LI_TAG":"321AA101","Descricao_Tarefa":"PM05 ROTA GAXETA L. FIBRA 2","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"CLOVIS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":46,"Tipo_OM":"PM02","Ordem":"28447297","LI_TAG":"125UH027","Descricao_Tarefa":"SUBST VEDAÇOES INFERIOR CILINDRO 04","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":18,"Duracao_horas":3.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"JONAS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":47,"Tipo_OM":"PM02","Ordem":"30731046","LI_TAG":"125UH042","Descricao_Tarefa":"SUBSTITUIR VEDAÇÕES DO CILINDRO 1 NA B40","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":18,"Duracao_horas":4.0,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"JONAS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":48,"Tipo_OM":"PM03","Ordem":"32019543","LI_TAG":"325BB803","Descricao_Tarefa":"MPCO-01-01MS-325-M INSP SENS BOMB NaHSO3","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":0,"Duracao_horas":3.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"TIAGO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":49,"Tipo_OM":"PM05","Ordem":"32047546","LI_TAG":"322LR201","Descricao_Tarefa":"MPSI- ROTA INSPEÇÃO PREVENTIVA DDW","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":0,"Duracao_horas":4.0,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"TIAGO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":50,"Tipo_OM":"PM02","Ordem":"31758667","LI_TAG":"325RA501M","Descricao_Tarefa":"SUBSTITUIÇÃO MOTOR ELETRICO (APOIO MECÂNICA","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":23,"Duracao_horas":3.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"LUIS ROMARIO;HERBERT"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":51,"Tipo_OM":"PM02","Ordem":"32111955","LI_TAG":"187PRA001","Descricao_Tarefa":"BOM SENSO LINHA DE FIBRAS L2","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":18,"Duracao_horas":4.0,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"LUIS ROMARIO;HERBERT"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":52,"Tipo_OM":"PM02","Ordem":"32051786","LI_TAG":"311MA103","Descricao_Tarefa":"SINERGIA PP PÁTIO DE MADEIRA L103","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":18,"Duracao_horas":7.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"PINOTI + 02 PAYMEC"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":54,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"TODOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":55,"Tipo_OM":"PM02","Ordem":"28447297","LI_TAG":"125UH027","Descricao_Tarefa":"SUBST VEDAÇOES INFERIOR CILINDRO 04","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":18,"Duracao_horas":3.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"ANTONIO CLAUDIO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":56,"Tipo_OM":"PM02","Ordem":"30731046","LI_TAG":"125UH042","Descricao_Tarefa":"SUBSTITUIR VEDAÇÕES DO CILINDRO 1 NA B40","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":18,"Duracao_horas":4.0,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"ANTONIO CLAUDIO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":57,"Tipo_OM":"PM03","Ordem":"32058898","LI_TAG":"125UH042","Descricao_Tarefa":"MPCO-7-7DS-125-M ROTA INSP SENS UH's LF","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"EDMAR"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":59,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"CALLF01","Grupo_Oficina":"CALDEIRARIA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"TODOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":60,"Tipo_OM":"PM02","Ordem":"31145822","LI_TAG":"324DP401","Descricao_Tarefa":"DNA20251003296DIRECIO LINHDRENO P/CANLET","Oficina":"CALLF01","Grupo_Oficina":"CALDEIRARIA","Matriz":23,"Duracao_horas":7.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"SAULO;CARLOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":61,"Tipo_OM":"PM02","Ordem":"32051786","LI_TAG":"311MA103","Descricao_Tarefa":"SINERGIA PP PÁTIO DE MADEIRA L103","Oficina":"CALLF01","Grupo_Oficina":"CALDEIRARIA","Matriz":18,"Duracao_horas":7.5,"Dia_Semana":"QUARTA-FEIRA","Inicio_ISO":"2026-06-10","Recursos":"FÁBIO;RAIMUNDO;C"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":64,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"TODOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":65,"Tipo_OM":"PM03","Ordem":"32055247","LI_TAG":"121","Descricao_Tarefa":"MPCO-107-14DS-121-M INSP SENSIT MEC RT5","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"JONAS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":66,"Tipo_OM":"PM02","Ordem":"31820090","LI_TAG":"125UH042","Descricao_Tarefa":"SUBSTITUIR CILINDRO 6 HASTE COM DESGASTE","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":23,"Duracao_horas":7.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"HERBERT;CLOVIS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":67,"Tipo_OM":"PM02","Ordem":"31373204","LI_TAG":"166EX100B","Descricao_Tarefa":"SUBSTITUIR MOTOR (APOIO ELÉTRICA)","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":19,"Duracao_horas":3.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"TIAGO;LUIS ROMARIO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":68,"Tipo_OM":"PM02","Ordem":"31814514","LI_TAG":"121SP040M3","Descricao_Tarefa":"SUBSTITUIR MOTOR (APOIO ELÉTRICA)","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":18,"Duracao_horas":4.0,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"TIAGO;LUIS ROMARIO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":69,"Tipo_OM":"PM02","Ordem":"32051786","LI_TAG":"311MA103","Descricao_Tarefa":"SINERGIA PP PÁTIO DE MADEIRA L103","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":18,"Duracao_horas":7.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"PINOTI + 02 PAYMEC"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":71,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"TODOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":72,"Tipo_OM":"PM02","Ordem":"31820090","LI_TAG":"125UH042","Descricao_Tarefa":"SUBSTITUIR CILINDRO HASTE COM DESGASTE","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":23,"Duracao_horas":7.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"ANTONIO CLAUDIO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":73,"Tipo_OM":"PM03","Ordem":"32069997","LI_TAG":"122UH024","Descricao_Tarefa":"MPCO-ROTA INSP. UH'S LINHA FIBRAS 1","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":0,"Duracao_horas":3.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"EDMAR"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":74,"Tipo_OM":"PM05","Ordem":"32061383","LI_TAG":"125UH042","Descricao_Tarefa":"ROTA DE INSP. NITROGENIO DOS ACUMULAD.","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":0,"Duracao_horas":4.0,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"EDMAR"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":76,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"CALLF01","Grupo_Oficina":"CALDEIRARIA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"TODOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":77,"Tipo_OM":"PM02","Ordem":"31821295","LI_TAG":"123RT025","Descricao_Tarefa":"CALOTA SUPERIOR REATOR COM ACUMULO ÁGUA","Oficina":"CALLF01","Grupo_Oficina":"CALDEIRARIA","Matriz":23,"Duracao_horas":7.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"SAULO;CARLOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":78,"Tipo_OM":"PM02","Ordem":"32051786","LI_TAG":"311MA103","Descricao_Tarefa":"SINERGIA PP PÁTIO DE MADEIRA L103","Oficina":"CALLF01","Grupo_Oficina":"CALDEIRARIA","Matriz":18,"Duracao_horas":7.5,"Dia_Semana":"QUINTA-FEIRA","Inicio_ISO":"2026-06-11","Recursos":"FÁBIO;RAIMUNDO;C"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":81,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"TODOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":82,"Tipo_OM":"PM03","Ordem":"32018703","LI_TAG":"195BAC001A","Descricao_Tarefa":"PM03-ARCCE-INSP.BB AJUSTE GAXETA 001A","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":0,"Duracao_horas":3.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"LUIS ROMARIO;CLOVIS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":83,"Tipo_OM":"PM03","Ordem":"32055246","LI_TAG":"120","Descricao_Tarefa":"MPCO-78-14DS-120-M INSP SENSIT MEC RT4","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":0,"Duracao_horas":4.0,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"LUIS ROMARIO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":84,"Tipo_OM":"PM02","Ordem":"32051834","LI_TAG":"187PRA001","Descricao_Tarefa":"APOIO AMOSTRAGEM ANDAIMES PG L1 LF","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":12,"Duracao_horas":4.0,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"CLOVIS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":85,"Tipo_OM":"PM02","Ordem":"31873924","LI_TAG":"324ED402","Descricao_Tarefa":"INSTALAR PARAFUSOS ED´s","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":28,"Duracao_horas":7.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"JONAS;TIAGO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":86,"Tipo_OM":"PM03","Ordem":"32047069","LI_TAG":"125","Descricao_Tarefa":"MPCO-117-14DS-125-M INSP SENSIT MEC RT3","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"HERBERT"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":87,"Tipo_OM":"PM02","Ordem":"32051786","LI_TAG":"311MA103","Descricao_Tarefa":"SINERGIA PP PÁTIO DE MADEIRA L103","Oficina":"MECLF01","Grupo_Oficina":"MECÂNICA","Matriz":18,"Duracao_horas":7.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"PINOTI + 02 PAYMEC"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":89,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"TODOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":90,"Tipo_OM":"PM02","Ordem":"31238929","LI_TAG":"324UH402","Descricao_Tarefa":"SANAR VAZAMENTO FILTRO Y","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":23,"Duracao_horas":3.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"ANTONIO CLAUDIO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":91,"Tipo_OM":"PM03","Ordem":"32061005","LI_TAG":"124UH063","Descricao_Tarefa":"MPCO-3-7DS-124-M ROTA INSP SENS UH's LF","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":0,"Duracao_horas":4.0,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"ANTONIO CLAUDIO"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":92,"Tipo_OM":"PM03","Ordem":"32061004","LI_TAG":"124UH065","Descricao_Tarefa":"MPCO-3-7DS-124-M ROTA INSP SENS UH's LF","Oficina":"HIDLF01","Grupo_Oficina":"HIDRAULICA","Matriz":0,"Duracao_horas":7.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"EDMAR"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":94,"Tipo_OM":null,"Ordem":"","LI_TAG":"","Descricao_Tarefa":"DDS E ALINHAMENTO DE ATIVIDADES DO DIA","Oficina":"CALLF01","Grupo_Oficina":"CALDEIRARIA","Matriz":0,"Duracao_horas":0.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"TODOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":95,"Tipo_OM":"PM02","Ordem":"28999088","LI_TAG":"166BB300","Descricao_Tarefa":"DNA: 202502045049 INSTAL CANALETAS/CHUVE","Oficina":"CALLF01","Grupo_Oficina":"CALDEIRARIA","Matriz":18,"Duracao_horas":7.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"SAULO;CARLOS"},{"Arquivo_Origem":"Mecanica_Hidraulica_Caldeiraria","Id":96,"Tipo_OM":"PM02","Ordem":"32051786","LI_TAG":"311MA103","Descricao_Tarefa":"SINERGIA PP PÁTIO DE MADEIRA L103","Oficina":"CALLF01","Grupo_Oficina":"CALDEIRARIA","Matriz":18,"Duracao_horas":7.5,"Dia_Semana":"SEXTA-FEIRA","Inicio_ISO":"2026-06-12","Recursos":"FÁBIO;RAIMUNDO;C"}];

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const C = {
  bg:"#0d1117",sur:"#161b22",sur2:"#1c2128",brd:"#30363d",brd2:"#484f58",
  txt:"#e6edf3",muted:"#8b949e",dim:"#484f58",
  amber:"#d29922",amberL:"#f0c040",amberDim:"#3d2e00",
  red:"#f85149",redDim:"#3d1200",
  green:"#3fb950",greenDim:"#0d2e1a",
  blue:"#58a6ff",blueDim:"#0c2a4a",
  purple:"#bc8cff",
};

// ─── ENGINE DE DECISÃO ────────────────────────────────────────────────────────
// Escala real de Matriz no CSV: 0, 12, 13, 18, 19, 23, 24, 27, 28...
// Mapeamento de criticidade: quanto MENOR a Matriz real, mais crítico (exceto 0 = indiferente no score)
// Ordem real de prioridade de remoção: Matriz=0 (mais removível) → Matriz alta (menos removível)
// ATENÇÃO: no CSV, Matriz=0 é a maioria das ordens de rota/inspeção sensitiva — são PM03/PM05 de rotina.

function matrizScore(m) {
  // Retorna pontuação de removibilidade pela matriz (0–1, maior = mais fácil remover)
  if (m === 0) return 1.0;      // Rota/inspeção sensitiva — mais removível
  if (m <= 13) return 0.75;     // Baixo impacto operacional
  if (m <= 19) return 0.5;      // Médio — substituição de motor, ex.
  if (m <= 24) return 0.35;     // Alto — área crítica
  return 0.2;                    // Muito alto: Matriz 27/28 = impacto severo
}

const TIPO_SCORE = { PM05:0.85, PM03:0.80, PM02:0.50, PM04:0.40 };

function calcScore(a) {
  const ms = matrizScore(Number(a.Matriz));
  const ts = TIPO_SCORE[a.Tipo_OM] ?? 0.6;
  return Math.round((0.55 * ms + 0.45 * ts) * 100);
}

function alertas(a) {
  const al = [];
  const m = Number(a.Matriz);
  if (m >= 23) al.push({ tipo:"ATENCAO", msg:`Matriz ${m} — área de alto impacto operacional` });
  if (a.Tipo_OM === "PM02") al.push({ tipo:"ATENCAO", msg:"PM02 — ordem de execução direta (não apenas inspeção)" });
  if (a.Tipo_OM === "PM04") al.push({ tipo:"ATENCAO", msg:"PM04 — manutenção preditiva com leitura ativa" });
  return al;
}

function elegivel(a) {
  if (!a.Ordem || !a.LI_TAG) return { ok:false, motivo:"Sem Ordem ou LI_TAG — não substituível" };
  return { ok:true, motivo:null };
}

function resolverCombinacoes(candidatas, horasNeed, oficina) {
  const ord = [...candidatas].sort((a,b) => {
    const ao = a.Grupo_Oficina === oficina ? 1:0, bo = b.Grupo_Oficina === oficina ? 1:0;
    if (bo !== ao) return bo - ao;
    return b._score - a._score;
  });
  const res = []; const n = ord.length;
  for (let tam = 1; tam <= Math.min(4,n); tam++) {
    const comb = (ini, cur) => {
      if (cur.length === tam) {
        const h = cur.reduce((s,x)=>s+Number(x.Duracao_horas),0);
        if (h >= horasNeed) {
          const sobra = h - horasNeed;
          const fora = cur.filter(x=>x.Grupo_Oficina!==oficina).length;
          const impacto = cur.reduce((s,x)=>s+Number(x.Matriz),0);
          res.push({ combo:[...cur], totalHoras:h, sobra, fora, impacto,
            custo: sobra*1.5 + impacto*0.8 + fora*6 });
        }
        return;
      }
      for (let i=ini;i<n;i++) comb(i+1,[...cur,ord[i]]);
    };
    comb(0,[]);
    if (res.length>=20) break;
  }
  return res.sort((a,b)=>a.custo-b.custo).slice(0,5);
}

// ─── HELPERS UI ───────────────────────────────────────────────────────────────
const s = {
  app:{ minHeight:"100vh", background:C.bg, color:C.txt, fontFamily:"'Inter',system-ui,sans-serif", fontSize:13 },
  hdr:{ background:C.sur, borderBottom:`1px solid ${C.brd}`, padding:"0 20px", display:"flex", alignItems:"center", gap:12, height:52 },
  mark:{ width:30,height:30,background:C.amber,borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:13,color:"#000" },
  nav:{ display:"flex",gap:3,marginLeft:"auto" },
  nb:(on)=>({ padding:"5px 12px",borderRadius:5,border:"none",cursor:"pointer",fontSize:12,fontWeight:600,
    background:on?C.amber:"transparent",color:on?"#000":C.muted,transition:"all .12s" }),
  main:{ maxWidth:1080,margin:"0 auto",padding:"20px 20px" },
  card:{ background:C.sur,border:`1px solid ${C.brd}`,borderRadius:8,padding:18,marginBottom:14 },
  ctit:{ fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",color:C.muted,marginBottom:14 },
  row:{ display:"flex",gap:14,flexWrap:"wrap" },
  lbl:{ fontSize:11,color:C.muted,marginBottom:5,display:"block" },
  inp:{ width:"100%",background:C.sur2,border:`1px solid ${C.brd}`,borderRadius:5,padding:"8px 10px",color:C.txt,fontSize:13,outline:"none",boxSizing:"border-box" },
  sel:{ width:"100%",background:C.sur2,border:`1px solid ${C.brd}`,borderRadius:5,padding:"8px 10px",color:C.txt,fontSize:13,outline:"none",boxSizing:"border-box",cursor:"pointer" },
  btn:(v)=>({ padding:"8px 18px",borderRadius:6,border:"none",cursor:"pointer",fontWeight:600,fontSize:12,
    background:v==="p"?C.amber:v==="d"?C.red:C.sur2, color:v==="p"?"#000":C.txt, transition:"opacity .12s" }),
  bdg:(c)=>({ display:"inline-flex",alignItems:"center",gap:3,padding:"2px 8px",borderRadius:20,fontSize:11,fontWeight:600,
    background:c==="r"?C.redDim:c==="a"?C.amberDim:c==="g"?C.greenDim:c==="b"?C.blueDim:C.sur2,
    color:c==="r"?"#ff7b72":c==="a"?C.amberL:c==="g"?"#7ee787":c==="b"?C.blue:C.muted,
    border:`1px solid ${c==="r"?C.red+"44":c==="a"?C.amber+"44":c==="g"?C.green+"44":c==="b"?C.blue+"33":C.brd}` }),
  tbl:{ width:"100%",borderCollapse:"collapse" },
  th:{ fontSize:11,fontWeight:700,color:C.muted,textTransform:"uppercase",letterSpacing:"0.05em",padding:"7px 10px",textAlign:"left",borderBottom:`1px solid ${C.brd}` },
  td:{ padding:"9px 10px",borderBottom:`1px solid ${C.brd+"55"}`,fontSize:12,verticalAlign:"middle" },
  alrt:(t)=>({ display:"flex",gap:6,alignItems:"flex-start",
    background:t==="BLOQUEIO"?C.redDim+"88":C.amberDim+"88",
    border:`1px solid ${t==="BLOQUEIO"?C.red+"55":C.amber+"55"}`,
    borderRadius:5,padding:"6px 10px",fontSize:11,marginTop:5,
    color:t==="BLOQUEIO"?"#ff7b72":C.amberL }),
  sc:(sel)=>({ background:sel?C.blueDim+"88":C.sur2, border:`1px solid ${sel?C.blue:C.brd}`,
    borderRadius:7,padding:14,cursor:"pointer",transition:"all .12s",marginBottom:9 }),
};

function Bar({ val }) {
  const cor = val>65?C.green:val>40?C.amber:C.red;
  return <div style={{display:"flex",alignItems:"center",gap:7}}>
    <div style={{flex:1,height:4,background:C.brd,borderRadius:2}}>
      <div style={{width:`${val}%`,height:"100%",background:cor,borderRadius:2,transition:"width .3s"}}/>
    </div>
    <span style={{fontSize:11,color:C.muted,minWidth:22}}>{val}</span>
  </div>;
}

function MatrizTag({ m }) {
  const n = Number(m);
  const c = n===0?"none":n<=13?"g":n<=19?"b":n<=24?"a":"r";
  const label = n===0?"M—":`M${n}`;
  return <span style={s.bdg(c)}>{label}</span>;
}

function TipoTag({ t }) {
  const map = { PM02:["a","PM02"], PM03:["b","PM03"], PM04:["b","PM04"], PM05:["none","PM05"] };
  const [c,l] = map[t]||["none",t||"—"];
  return <span style={s.bdg(c)}>{l}</span>;
}

// ─── TELA CRONOGRAMA ──────────────────────────────────────────────────────────
function TelaCronograma({ diaSelecionado, onDiaChange }) {
  const diasDisponiveis = [...new Set(CRONOGRAMA_REAL.filter(a=>a.Dia_Semana).map(a=>({ iso:a.Inicio_ISO, dia:a.Dia_Semana })).map(d=>JSON.stringify(d)))].map(d=>JSON.parse(d));
  const ativDia = CRONOGRAMA_REAL.filter(a=>a.Inicio_ISO===diaSelecionado);
  const totalH = ativDia.reduce((s,a)=>s+Number(a.Duracao_horas||0),0);
  const subst = ativDia.filter(a=>elegivel(a).ok).length;

  return <div>
    <div style={{...s.card,display:"flex",gap:12,alignItems:"center",flexWrap:"wrap",marginBottom:14}}>
      <div>
        <label style={s.lbl}>Dia selecionado</label>
        <select style={{...s.sel,width:"auto",minWidth:200}} value={diaSelecionado} onChange={e=>onDiaChange(e.target.value)}>
          {diasDisponiveis.map(d=><option key={d.iso} value={d.iso}>{d.dia} — {d.iso}</option>)}
        </select>
      </div>
      {[["Atividades",ativDia.length,"b"],["Total horas",totalH.toFixed(1)+"h","a"],["Substituíveis",subst,"g"],["Não subst.",ativDia.length-subst,"r"]].map(([l,v,c])=>
        <div key={l} style={{textAlign:"center",padding:"8px 18px",background:C.sur2,borderRadius:7,border:`1px solid ${C.brd}`}}>
          <div style={{fontSize:22,fontWeight:800,color:C[c==="b"?"blue":c==="a"?"amber":c==="g"?"green":"red"]}}>{v}</div>
          <div style={{fontSize:11,color:C.muted}}>{l}</div>
        </div>
      )}
    </div>

    <div style={s.card}>
      <div style={s.ctit}>Atividades do dia {diaSelecionado}</div>
      <div style={{overflowX:"auto"}}>
        <table style={s.tbl}>
          <thead><tr>
            {["Ordem","LI_TAG","Descrição","Oficina/Origem","Matriz","Horas","Tipo","Recursos","Status"].map(h=>
              <th key={h} style={s.th}>{h}</th>)}
          </tr></thead>
          <tbody>
            {ativDia.map((a,i)=>{
              const el = elegivel(a);
              return <tr key={i} style={{opacity:el.ok?1:0.55}}>
                <td style={s.td}><code style={{fontSize:11,color:C.amber}}>{a.Ordem||"—"}</code></td>
                <td style={s.td}><code style={{fontSize:11,color:C.purple}}>{a.LI_TAG||"—"}</code></td>
                <td style={{...s.td,maxWidth:260,fontSize:11}}>{a.Descricao_Tarefa}</td>
                <td style={s.td}><div style={{fontSize:11}}>{a.Grupo_Oficina||<span style={{color:C.dim}}>—</span>}</div><div style={{fontSize:10,color:C.dim}}>{a.Oficina}</div></td>
                <td style={s.td}><MatrizTag m={a.Matriz}/></td>
                <td style={{...s.td,textAlign:"right",fontVariantNumeric:"tabular-nums"}}>{Number(a.Duracao_horas).toFixed(1)}h</td>
                <td style={s.td}>{a.Tipo_OM?<TipoTag t={a.Tipo_OM}/>:<span style={{color:C.dim,fontSize:11}}>—</span>}</td>
                <td style={{...s.td,fontSize:10,color:C.muted,maxWidth:120}}>{a.Recursos||"—"}</td>
                <td style={s.td}>{el.ok?<span style={s.bdg("g")}>✓ Elegível</span>:<span title={el.motivo} style={s.bdg("r")}>⛔ Fixo</span>}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>;
}

// ─── TELA EMERGÊNCIA ──────────────────────────────────────────────────────────
function TelaEmergencia({ diaSelecionado, onAnalise }) {
  const oficinas = [...new Set(CRONOGRAMA_REAL.filter(a=>a.Grupo_Oficina).map(a=>a.Grupo_Oficina))];
  const [f,setF] = useState({ descricao:"",equipamento:"",tag:"",oficina:"",horas:"",prioridade:"PRODUCAO" });
  const set = k=>e=>setF(p=>({...p,[k]:e.target.value}));
  const ok = f.descricao&&f.equipamento&&f.oficina&&Number(f.horas)>0;

  const analisar = () => {
    const ativDia = CRONOGRAMA_REAL.filter(a=>a.Inicio_ISO===diaSelecionado);
    const candidatas = ativDia.filter(a=>elegivel(a).ok).map(a=>({...a,_score:calcScore(a),_alertas:alertas(a)}));
    const sugestoes = resolverCombinacoes(candidatas, Number(f.horas), f.oficina);
    onAnalise({ emerg:f, candidatas, sugestoes, horasNeed:Number(f.horas), diaSelecionado });
  };

  return <div>
    <div style={{...s.card,borderColor:C.red+"55",background:C.redDim+"33"}}>
      <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:14}}>
        <span style={{fontSize:18}}>🚨</span>
        <span style={{...s.ctit,margin:0,color:"#ff7b72"}}>REGISTRO DE MANUTENÇÃO EMERGENCIAL</span>
      </div>
      <div style={{color:C.muted,fontSize:12,marginBottom:18}}>
        Dia analisado: <strong style={{color:C.txt}}>{diaSelecionado}</strong> — O sistema sugerirá quais atividades podem ser retiradas. <strong style={{color:C.txt}}>A decisão é sempre do planejador.</strong>
      </div>

      <div style={{...s.row,marginBottom:12}}>
        <div style={{flex:3,minWidth:200}}>
          <label style={s.lbl}>Descrição da emergência *</label>
          <input style={s.inp} placeholder="Ex: Falha em bomba de polpa — vazamento de selo mecânico na linha 2" value={f.descricao} onChange={set("descricao")}/>
        </div>
        <div style={{flex:1,minWidth:120}}>
          <label style={s.lbl}>Equipamento *</label>
          <input style={s.inp} placeholder="Ex: PP-2201" value={f.equipamento} onChange={set("equipamento")}/>
        </div>
        <div style={{flex:1,minWidth:120}}>
          <label style={s.lbl}>TAG</label>
          <input style={s.inp} placeholder="Ex: 325RA501M" value={f.tag} onChange={set("tag")}/>
        </div>
      </div>

      <div style={{...s.row,marginBottom:18}}>
        <div style={{flex:1,minWidth:150}}>
          <label style={s.lbl}>Oficina responsável *</label>
          <select style={s.sel} value={f.oficina} onChange={set("oficina")}>
            <option value="">Selecione…</option>
            {oficinas.map(o=><option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div style={{flex:1,minWidth:100}}>
          <label style={s.lbl}>Horas estimadas *</label>
          <input style={s.inp} type="number" min="0.5" step="0.5" placeholder="Ex: 4" value={f.horas} onChange={set("horas")}/>
        </div>
        <div style={{flex:1,minWidth:140}}>
          <label style={s.lbl}>Prioridade</label>
          <select style={s.sel} value={f.prioridade} onChange={set("prioridade")}>
            <option value="SEGURANCA">🔴 Segurança</option>
            <option value="AMBIENTAL">🟠 Ambiental</option>
            <option value="PRODUCAO">🟡 Produção</option>
            <option value="QUALIDADE">🔵 Qualidade</option>
          </select>
        </div>
      </div>

      <button style={{...s.btn("p"),opacity:ok?1:0.4}} disabled={!ok} onClick={analisar}>
        🔍 Analisar e Gerar Sugestões
      </button>
    </div>
  </div>;
}

// ─── TELA SUGESTÕES ───────────────────────────────────────────────────────────
function TelaSugestoes({ analise, onNova }) {
  const [sel,setSel] = useState(0);
  const [just,setJust] = useState("");
  const [confirmado,setConf] = useState(false);
  const { emerg, sugestoes, candidatas, horasNeed } = analise;

  if (confirmado) {
    const sg = sugestoes[sel];
    return <div style={{...s.card,borderColor:C.green+"55",background:C.greenDim,textAlign:"center",padding:40}}>
      <div style={{fontSize:36,marginBottom:10}}>✅</div>
      <div style={{fontSize:16,fontWeight:700,marginBottom:8}}>Reprogramação Registrada</div>
      <div style={{color:C.muted,fontSize:12,marginBottom:20}}>
        {sg.combo.length} atividade(s) removida(s) · {sg.totalHoras.toFixed(1)}h liberadas · Sobra: {sg.sobra.toFixed(1)}h
      </div>
      <div style={{...s.card,textAlign:"left",maxWidth:480,margin:"0 auto"}}>
        <div style={s.ctit}>Atividades removidas do cronograma</div>
        {sg.combo.map((a,i)=><div key={i} style={{padding:"5px 0",borderBottom:`1px solid ${C.brd}`,fontSize:12}}>
          <code style={{color:C.purple}}>{a.LI_TAG}</code> <span style={{color:C.muted}}>—</span> {a.Descricao_Tarefa}
          <span style={{float:"right",color:C.muted}}>{Number(a.Duracao_horas).toFixed(1)}h</span>
        </div>)}
        <div style={{marginTop:10,fontSize:11,color:C.muted}}>Justificativa: {just}</div>
      </div>
      <button style={{...s.btn("none"),marginTop:18}} onClick={onNova}>Nova emergência</button>
    </div>;
  }

  if (sugestoes.length===0) return <div style={{...s.card,textAlign:"center",padding:40}}>
    <div style={{fontSize:32,marginBottom:10}}>⚠️</div>
    <div style={{fontWeight:700,marginBottom:8}}>Horas insuficientes para cobrir a emergência</div>
    <div style={{color:C.muted,fontSize:12}}>
      Não há combinações de atividades substituíveis no dia {analise.diaSelecionado} que totalizem {horasNeed}h para a oficina {emerg.oficina}.<br/>
      Considere redistribuição manual ou aprovação de remoção de atividades restritas.
    </div>
  </div>;

  const melhor = sugestoes[sel];

  return <div>
    <div style={{...s.card,borderColor:C.red+"44",background:C.redDim+"22",display:"flex",gap:20,flexWrap:"wrap",alignItems:"center"}}>
      <div><div style={{fontSize:10,color:C.muted}}>EMERGÊNCIA</div><div style={{fontWeight:600,maxWidth:300}}>{emerg.descricao}</div></div>
      <div><div style={{fontSize:10,color:C.muted}}>OFICINA</div><div style={{fontWeight:600}}>{emerg.oficina}</div></div>
      <div><div style={{fontSize:10,color:C.muted}}>DIA</div><div style={{fontWeight:600}}>{analise.diaSelecionado}</div></div>
      <div><div style={{fontSize:10,color:C.muted}}>HORAS NECESSÁRIAS</div><div style={{fontWeight:800,fontSize:20,color:C.red}}>{horasNeed}h</div></div>
      <div><div style={{fontSize:10,color:C.muted}}>CANDIDATAS DISPONÍVEIS</div><div style={{fontWeight:800,fontSize:20,color:C.amber}}>{candidatas.length}</div></div>
    </div>

    <div style={s.row}>
      <div style={{flex:1,minWidth:300}}>
        <div style={s.card}>
          <div style={s.ctit}>Candidatas — Score de removibilidade</div>
          {candidatas.sort((a,b)=>b._score-a._score).map((a,i)=><div key={i} style={{paddingBottom:12,marginBottom:12,borderBottom:`1px solid ${C.brd+"66"}`}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:5}}>
              <div>
                <code style={{fontSize:11,color:C.purple}}>{a.LI_TAG}</code>
                <span style={{fontSize:10,color:C.muted,marginLeft:6}}>{a.Grupo_Oficina}</span>
                {a.Grupo_Oficina===emerg.oficina&&<span style={{...s.bdg("g"),marginLeft:6,fontSize:10}}>✓ mesma oficina</span>}
              </div>
              <div style={{display:"flex",gap:5,alignItems:"center"}}>
                <MatrizTag m={a.Matriz}/>
                <TipoTag t={a.Tipo_OM}/>
                <span style={{fontSize:11,color:C.muted}}>{Number(a.Duracao_horas).toFixed(1)}h</span>
              </div>
            </div>
            <div style={{fontSize:11,color:C.muted,marginBottom:6,lineHeight:1.4}}>{a.Descricao_Tarefa}</div>
            {a.Recursos&&<div style={{fontSize:10,color:C.dim,marginBottom:5}}>👤 {a.Recursos}</div>}
            <Bar val={a._score}/>
            {a._alertas.map((al,j)=><div key={j} style={s.alrt(al.tipo)}><span>⚠️</span><span>{al.msg}</span></div>)}
          </div>)}
        </div>
      </div>

      <div style={{flex:1,minWidth:300}}>
        <div style={s.card}>
          <div style={s.ctit}>Top {sugestoes.length} combinações sugeridas</div>
          {sugestoes.map((sg,i)=><div key={i} style={s.sc(sel===i)} onClick={()=>setSel(i)}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:9}}>
              <div style={{display:"flex",gap:6,alignItems:"center"}}>
                <span style={{fontWeight:700}}>Opção {i+1}</span>
                {i===0&&<span style={s.bdg("g")}>★ Recomendada</span>}
              </div>
              <div style={{display:"flex",gap:12}}>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:9,color:C.muted}}>LIBERA</div>
                  <div style={{fontSize:17,fontWeight:800,color:C.green}}>{sg.totalHoras.toFixed(1)}h</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:9,color:C.muted}}>SOBRA</div>
                  <div style={{fontSize:17,fontWeight:800,color:sg.sobra<1?C.green:C.amber}}>{sg.sobra.toFixed(1)}h</div>
                </div>
              </div>
            </div>
            {sg.combo.map((a,j)=><div key={j} style={{display:"flex",gap:7,alignItems:"center",padding:"4px 0",borderBottom:j<sg.combo.length-1?`1px solid ${C.brd+"44"}`:"none"}}>
              <code style={{fontSize:10,color:C.purple,minWidth:85}}>{a.LI_TAG}</code>
              <span style={{fontSize:11,flex:1,color:C.muted}}>{a.Descricao_Tarefa.slice(0,52)}{a.Descricao_Tarefa.length>52?"…":""}</span>
              <span style={{fontSize:11,color:C.muted}}>{Number(a.Duracao_horas).toFixed(1)}h</span>
              <MatrizTag m={a.Matriz}/>
            </div>)}
            {sg.fora>0&&<div style={{...s.alrt("ATENCAO"),marginTop:8}}><span>⚠️</span><span>{sg.fora} atividade(s) de outra oficina</span></div>}
          </div>)}
        </div>

        <div style={s.card}>
          <div style={s.ctit}>Confirmação da decisão</div>
          <div style={{marginBottom:10}}>
            <span style={s.bdg("b")}>Selecionada: Opção {sel+1}</span>
            <span style={{fontSize:11,color:C.muted,marginLeft:8}}>{melhor.combo.length} atividade(s) · {melhor.totalHoras.toFixed(1)}h liberadas</span>
          </div>
          <label style={s.lbl}>Justificativa (obrigatória) *</label>
          <textarea style={{...s.inp,minHeight:68,resize:"vertical",fontFamily:"inherit"}}
            placeholder="Descreva o motivo da escolha e qualquer consideração relevante…"
            value={just} onChange={e=>setJust(e.target.value)}/>
          <div style={{display:"flex",gap:8,marginTop:10}}>
            <button style={{...s.btn("p"),opacity:just.length>8?1:0.4}} disabled={just.length<=8} onClick={()=>setConf(true)}>
              ✅ Confirmar Reprogramação
            </button>
            <button style={s.btn("none")} onClick={onNova}>Cancelar</button>
          </div>
          <div style={{marginTop:8,fontSize:10,color:C.dim}}>Registro de auditoria: timestamp + usuário + justificativa.</div>
        </div>
      </div>
    </div>
  </div>;
}

// ─── TELA DASHBOARD ───────────────────────────────────────────────────────────
function TelaDashboard({ diaSelecionado }) {
  const ativDia = CRONOGRAMA_REAL.filter(a=>a.Inicio_ISO===diaSelecionado);
  const totalH = ativDia.reduce((s,a)=>s+Number(a.Duracao_horas||0),0);

  const porOficina = {};
  ativDia.forEach(a=>{
    if (!a.Grupo_Oficina) return;
    if (!porOficina[a.Grupo_Oficina]) porOficina[a.Grupo_Oficina]={total:0,subst:0,count:0};
    porOficina[a.Grupo_Oficina].total+=Number(a.Duracao_horas||0);
    porOficina[a.Grupo_Oficina].count++;
    if (elegivel(a).ok) porOficina[a.Grupo_Oficina].subst+=Number(a.Duracao_horas||0);
  });

  const tiposDist = {};
  ativDia.filter(a=>a.Tipo_OM).forEach(a=>{
    tiposDist[a.Tipo_OM]=(tiposDist[a.Tipo_OM]||0)+1;
  });

  const subst = ativDia.filter(a=>elegivel(a).ok);
  const totalSubstH = subst.reduce((s,a)=>s+Number(a.Duracao_horas||0),0);

  return <div>
    <div style={{...s.row,marginBottom:14}}>
      {[
        ["Atividades hoje",ativDia.length,"blue"],
        ["Horas planejadas",totalH.toFixed(1)+"h","amber"],
        ["Elegíveis p/ remoção",subst.length,"green"],
        ["H elegíveis",totalSubstH.toFixed(1)+"h","green"],
        ["Fixas",ativDia.length-subst.length,"red"],
      ].map(([l,v,c])=><div key={l} style={{flex:1,minWidth:120,textAlign:"center",padding:"12px 16px",background:C.sur,border:`1px solid ${C.brd}`,borderRadius:7}}>
        <div style={{fontSize:22,fontWeight:800,color:C[c]}}>{v}</div>
        <div style={{fontSize:11,color:C.muted,marginTop:3}}>{l}</div>
      </div>)}
    </div>

    <div style={s.row}>
      <div style={{flex:1,minWidth:260}}>
        <div style={s.card}>
          <div style={s.ctit}>Distribuição por Oficina — {diaSelecionado}</div>
          {Object.entries(porOficina).sort((a,b)=>b[1].total-a[1].total).map(([of,d])=><div key={of} style={{marginBottom:16}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
              <span style={{fontWeight:600}}>{of}</span>
              <span style={{color:C.muted,fontSize:11}}>{d.count} ativ · {d.total.toFixed(1)}h</span>
            </div>
            <div style={{height:7,background:C.brd,borderRadius:3,overflow:"hidden"}}>
              <div style={{display:"flex",height:"100%"}}>
                <div style={{width:`${(d.subst/d.total)*100}%`,background:C.green}}/>
                <div style={{width:`${((d.total-d.subst)/d.total)*100}%`,background:C.red+"88"}}/>
              </div>
            </div>
            <div style={{display:"flex",gap:10,marginTop:4,fontSize:10,color:C.muted}}>
              <span style={{color:C.green}}>● {d.subst.toFixed(1)}h elegíveis</span>
              <span style={{color:C.red}}>● {(d.total-d.subst).toFixed(1)}h fixas</span>
            </div>
          </div>)}
        </div>
      </div>

      <div style={{flex:1,minWidth:260}}>
        <div style={s.card}>
          <div style={s.ctit}>Distribuição por Tipo de OM</div>
          {Object.entries(tiposDist).sort((a,b)=>b[1]-a[1]).map(([t,n])=><div key={t} style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
            <TipoTag t={t}/>
            <div style={{flex:1,height:7,background:C.brd,borderRadius:3,overflow:"hidden"}}>
              <div style={{width:`${(n/ativDia.filter(a=>a.Tipo_OM).length)*100}%`,height:"100%",background:C.blue}}/>
            </div>
            <span style={{fontSize:11,color:C.muted,minWidth:40}}>{n} ativ.</span>
          </div>)}
        </div>

        <div style={s.card}>
          <div style={s.ctit}>Legenda — Regras do Sistema</div>
          {[
            ["✓ Elegível","g","Tem Ordem + LI_TAG preenchidos"],
            ["⛔ Fixo","r","Sem Ordem ou sem LI_TAG — não substituível"],
            ["PM05","none","Score alto de removibilidade — rota/preventiva"],
            ["PM03","b","Score alto — inspeção sensitiva de rota"],
            ["PM02","a","Score médio — serviços de execução direta"],
            ["PM04","b","Score menor — preditiva com leitura ativa"],
          ].map(([label,c,desc])=><div key={label} style={{display:"flex",gap:8,alignItems:"center",marginBottom:8}}>
            <span style={s.bdg(c)}>{label}</span>
            <span style={{fontSize:11,color:C.muted}}>{desc}</span>
          </div>)}
        </div>
      </div>
    </div>
  </div>;
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App() {
  const HOJE = "2026-06-10"; // quarta-feira — dia atual no CSV
  const [tela, setTela] = useState("cronograma");
  const [dia, setDia] = useState(HOJE);
  const [analise, setAnalise] = useState(null);

  const handleAnalise = (resultado) => { setAnalise(resultado); setTela("sugestoes"); };
  const handleNova = () => { setAnalise(null); setTela("emergencia"); };

  const TELAS = [
    { id:"cronograma", label:"📋 Cronograma" },
    { id:"emergencia", label:"🚨 Emergência" },
    { id:"sugestoes", label:"💡 Sugestões", disabled:!analise },
    { id:"dashboard", label:"📊 Dashboard" },
  ];

  return <div style={s.app}>
    <div style={s.hdr}>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <div style={s.mark}>PCM</div>
        <div>
          <div style={{fontWeight:700,fontSize:14,letterSpacing:"0.02em"}}>EmergePlan</div>
          <div style={{fontSize:10,color:C.muted}}>Semana 24 — Fábrica de Papel e Celulose</div>
        </div>
      </div>
      <nav style={s.nav}>
        {TELAS.map(t=><button key={t.id} style={{...s.nb(tela===t.id),opacity:t.disabled?0.4:1}}
          onClick={()=>!t.disabled&&setTela(t.id)} disabled={t.disabled}>{t.label}</button>)}
      </nav>
    </div>

    <div style={s.main}>
      {tela==="cronograma"&&<TelaCronograma diaSelecionado={dia} onDiaChange={setDia}/>}
      {tela==="emergencia"&&<TelaEmergencia diaSelecionado={dia} onAnalise={handleAnalise}/>}
      {tela==="sugestoes"&&analise&&<TelaSugestoes analise={analise} onNova={handleNova}/>}
      {tela==="dashboard"&&<TelaDashboard diaSelecionado={dia}/>}
    </div>
  </div>;
}
