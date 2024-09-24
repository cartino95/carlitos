const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Behaviors.Platform,
		C3.Behaviors.Physics,
		C3.Plugins.Keyboard,
		C3.Behaviors.solid,
		C3.Behaviors.jumpthru,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Text.Acts.SetFontSize,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Exps.zeropad,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{MesaDeTrabajo: 0},
	{LOGO: 0},
	{PERSONAJE: 0},
	{Comenzaaar: 0},
	{Mouse: 0},
	{MesaDeTrabajo2: 0},
	{MesaDeTrabajo3: 0},
	{Platform: 0},
	{Physics: 0},
	{ali: 0},
	{Keyboard: 0},
	{Solid: 0},
	{Sprite: 0},
	{Jumpthru: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{MesaDeTrabajo4: 0},
	{Instrucciones: 0},
	{instr: 0},
	{instr2: 0},
	{aliInstr: 0},
	{flechaaa: 0},
	{Text: 0},
	{mando: 0},
	{espacio: 0},
	{pasto: 0},
	{Text2: 0},
	{Fruta1: 0},
	{Fruta2: 0},
	{Fruta3: 0},
	{Fruta4: 0},
	{Fruta5: 0},
	{Contador: 0},
	{ContAlim: 0},
	{MesaDeTrabajo5: 0},
	{Text3: 0},
	{Text4: 0},
	{Minutos: 0},
	{Segundos: 0},
	{FrutaCosechada: 0}
];

self.InstanceType = {
	MesaDeTrabajo: class extends self.ISpriteInstance {},
	LOGO: class extends self.ISpriteInstance {},
	PERSONAJE: class extends self.ISpriteInstance {},
	Comenzaaar: class extends self.ITextInstance {},
	Mouse: class extends self.IInstance {},
	MesaDeTrabajo2: class extends self.ISpriteInstance {},
	MesaDeTrabajo3: class extends self.ISpriteInstance {},
	ali: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	MesaDeTrabajo4: class extends self.ISpriteInstance {},
	Instrucciones: class extends self.ITextInstance {},
	instr: class extends self.ISpriteInstance {},
	instr2: class extends self.ISpriteInstance {},
	aliInstr: class extends self.ISpriteInstance {},
	flechaaa: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	mando: class extends self.ISpriteInstance {},
	espacio: class extends self.ISpriteInstance {},
	pasto: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {},
	Fruta1: class extends self.ISpriteInstance {},
	Fruta2: class extends self.ISpriteInstance {},
	Fruta3: class extends self.ISpriteInstance {},
	Fruta4: class extends self.ISpriteInstance {},
	Fruta5: class extends self.ISpriteInstance {},
	Contador: class extends self.ITextInstance {},
	ContAlim: class extends self.ITextInstance {},
	MesaDeTrabajo5: class extends self.ISpriteInstance {},
	Text3: class extends self.ITextInstance {},
	Text4: class extends self.ITextInstance {}
}