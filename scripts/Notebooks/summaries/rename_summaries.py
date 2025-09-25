import os, json

# === Словарь соответствий для grade=10 ===
mapping = {
    "physics__10adiabatic.zip": 154,
    "physics__10politropa.zip": 155,
    "physics__10cycle.zip": 156,
    "physics__10Tkarno.zip": 157,
    "physics__10KK.zip": 152,
    "physics__10klapmend.zip": 152,
    "physics__10karno.zip": 157,
    "physics__10epsilon.zip": 160,
    "physics__10Entropy.zip": 161,
    "physics__10humid.zip": 162,
    "physics__10G.zip": 163,              # Уравнение Клапейрона-Клаузиуса
    "physics__10system.zip": 153,
    "physics__10pvo.zip": 151,            # Длина свободного пробега
    "physics__10conduct.zip": 153,        # Работа, внутренняя энергия
    "physics__10mirror.zip": 75,          # Отражение света. Зеркала.
    "physics__10reflection.zip": 78,      # Полное внутреннее отражение
    "physics__10lens.zip": 79,            # Линза, построение изображений
    "physics__10small.zip": 80,           # Формула тонкой линзы
    "physics__10image.zip": 81,           # Увеличение
    "physics__10tel.zip": 82,             # Оптические системы
    "physics__10shadow.zip": 83,          # Тень. Полутень.
    "physics__10VNT.zip": 84,             # Интерференция волн
    "physics__10ftl.zip": 85,             # Дифракция на щели
    "physics__10log.zip": 86,             # Дифракция на препятствии
    "physics__10turelec.zip": 113,        # Энергия систем зарядов
    "physics__10turopt.zip": 165,         # Тур. термодинамика 10 класс
    "physics__10turterm.zip": 165,        # то же самое
    "physics__10vdv.zip": 110,            # Теорема единственности
    "physics__10lambda.zip": 112,         # Метод изображений
    "physics__10equilibrium.zip": 114, 
           "physics__10AU.zip": 154,      # скорректируем, если в .tex другая тема
    "physics__10qen.zip": 153,
    "physics__10klin.zip": 155,    # вероятно политропа/кривые процессы
    "physics__10gauss.zip": 111,
    "physics__10klau.zip": 152
   # Диэлектрики в поле
}

# === Переименование файлов ===
for fname in os.listdir("."):
    if not fname.endswith("__summary.tex"):
        continue

    base = fname.replace("__summary.tex", ".zip")
    if base in mapping:
        new_name = f"{mapping[base]}.tex"
        print(f"🔄 {fname} → {new_name}")
        os.rename(fname, new_name)
    else:
        print(f"⚠️ Пропуск: {fname} (нет в словаре)")
