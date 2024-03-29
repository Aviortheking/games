import Vector2D from 'GameEngine/2D/Vector2D'
import Component2D from 'GameEngine/Component2D'
import RectRenderer from 'GameEngine/Renderer/RectRenderer'

export default class Line extends Component2D {

	// public debug = true
	public name = 'Line'

	public constructor(direction: number, index: number) {
		super()
		this.renderer = new RectRenderer(this, {material: 'orange'})

		this.position = new Vector2D(
			direction ? index ? 1.5 : 0.5 : 1,
			direction ? 1 : index ? 0.5 : 1.5
		)

		this.scale = new Vector2D(
			direction ? .1 : 3,
			direction ? 3 : .1
		)

		// this.origin = new Vector2D(
		// 	-this.scale.x / 2,
		// 	0
		// )

		// this.childs = [new ComponentDebug(this)]
	}

}
