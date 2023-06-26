import * as vscode from 'vscode';

export function getVarAbove(document: vscode.TextDocument, keyword: string, index: number) {
	let pos : vscode.Position;
	let line;
	let i = 0;
	// in order to get defined, we defined the last line for the document analysis...
	const lastLine : number =  vscode.window.activeTextEditor?.selection.active.line as number;
	const res = [];
	while (i < lastLine) {
		pos = new vscode.Position(i, 0);
		line = document.lineAt(pos).text;
		if (line.startsWith(keyword + '')) {
			const varValue = line.split(':');
			res.push((varValue[index]).split('{')[0]);
		}
		i++;
	}
	return res;
}
