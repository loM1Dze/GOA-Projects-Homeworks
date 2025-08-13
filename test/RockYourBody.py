




from time import sleep
from rich import print

def tiktok():
    lines = [
        ("i wanna da-", 0.7),
        ("I wanna dance in the lights", 1.0),
        ("I wanna ro-", 0.7),
        ("I wanna rock your body", 1.2),
        ("I wanna go", 0.7),
        ("I wanna go for a ride", 1.2),
        ("Hop in the music and", 0.8),
        ("Rock your body", 1.2),
        ("Rock that body", 0.8),
        ("Come on, come on", 0.3),
        ("Rock that body", 0.3),
        ("(Rock your body)", 0.3),
        ("Rock that body", 0.3),
        ("come on, come on", 0.3),
        ("Rock that body", 1.2)
    ]
    for text, delay in lines:
        for char in text:
            print(f"[bold magenta]{char}[/bold magenta]", end='', flush=True)
            sleep(0.05)  # typing speed per character
        print()  # new line after each lyric
        sleep(delay)

tiktok()