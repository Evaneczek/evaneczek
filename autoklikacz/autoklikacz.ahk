; Autoklikacz + automatyczne wklejanie — AutoHotkey v2 (tylko Windows)
; Pobierz AutoHotkey v2: https://www.autohotkey.com  i kliknij dwa razy ten plik.
;
;   F6 - zapisz miejsce klikania (tam, gdzie teraz jest mysz)
;   F7 - START / PAUZA
;   F8 - zamknij skrypt
;
; Po starcie:
;   - co 30 s: klik w zapisane miejsce
;   - co 5 min: Enter -> Ctrl+V -> Enter -> Enter

#Requires AutoHotkey v2.0
#SingleInstance Force
CoordMode "Mouse", "Screen"

CLICK_MS := 30 * 1000       ; co ile ms klikać (30 s)
PASTE_MS := 5 * 60 * 1000   ; co ile ms wklejać (5 min)

global clickX := "", clickY := "", running := false

Pokaz(tekst) {
    ToolTip tekst
    SetTimer () => ToolTip(), -1500
}

F6:: {
    global clickX, clickY
    MouseGetPos &clickX, &clickY
    Pokaz "Zapisano miejsce: " clickX ", " clickY
}

F7:: {
    global running
    if (clickX = "") {
        Pokaz "Najpierw ustaw mysz i wciśnij F6"
        return
    }
    running := !running
    if running {
        SetTimer Klik, CLICK_MS
        SetTimer Wklej, PASTE_MS
        Pokaz "START"
    } else {
        SetTimer Klik, 0
        SetTimer Wklej, 0
        Pokaz "PAUZA"
    }
}

F8::ExitApp

Klik() {
    Critical
    Click clickX, clickY
}

Wklej() {
    Critical
    Send "{Enter}"
    Sleep 300
    Send "^v"
    Sleep 300
    Send "{Enter}"
    Sleep 300
    Send "{Enter}"
}
