(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
			"Grid" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("2px solid #e0002a, 1px solid #b7b1b2, 1px solid #b7b1b2, 1px solid #b7b1b2")
					}
				}
			},
			"cell" :
			{
				"parent" :
				{
					"row" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"font" : nexacro.FontObject("bold 12px Gulim"),
												"color" : nexacro.ColorObject("#2f2f2f"),
												"border" : nexacro.BorderObject("1px solid #cacaca"),
												"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
											},
											"disabled" :
											{
												"color" : nexacro.ColorObject("#999999")
											}
										}
									}
								}
							},
							"body" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"disabled_selected" :
											{
											},
											"enabled" :
											{
												"color" : nexacro.ColorObject("#333333"),
												"border" : nexacro.BorderObject("1px solid #dbdee2"),
												"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
											},
											"mouseover" :
											{
											},
											"selected" :
											{
											},
											"disabled" :
											{
												"color" : nexacro.ColorObject("#999999")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"groupboxtitle" :
			{
				"parent" :
				{
					"GroupBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("bold 12px Gulim"),
								"color" : nexacro.ColorObject("#e0002a")
							}
						}
					}
				}
			},
			"Static" :
			{
				"class" :
				{
					"sta_WF_label" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("bold 12px Gulim")
							}
						}
					},
					"sta_WF_infoBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("10px"),
								"color" : nexacro.ColorObject("#333333")
							}
						}
					},
					"sta_WF_markWhite" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #777777"),
								"color" : nexacro.ColorObject("#333333")
							}
						}
					},
					"sta_WF_markBlue" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #209c9a"),
								"color" : nexacro.ColorObject("#333333")
							}
						}
					},
					"sta_WF_markRed" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d97069"),
								"color" : nexacro.ColorObject("#333333")
							}
						}
					}
				}
			},
			"Button" :
			{
				"class" :
				{
					"btn_WF_btnWhite" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #777777"),
								"color" : nexacro.ColorObject("#333333"),
								"font" : nexacro.FontObject("bold 12px/normal Gulim")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #777777"),
								"color" : nexacro.ColorObject("#333333"),
								"font" : nexacro.FontObject("bold 12px/normal Gulim")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #585858")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #585858")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #585858")
							}
						}
					},
					"btn_WF_btnRed" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #e0002a"),
								"color" : nexacro.ColorObject("#555555"),
								"font" : nexacro.FontObject("bold 12px/normal Gulim")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #e0002a"),
								"color" : nexacro.ColorObject("#555555"),
								"font" : nexacro.FontObject("bold 12px/normal Gulim")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					},
					"btn_WF_btnInitial" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #e0002a"),
								"color" : nexacro.ColorObject("#555555"),
								"font" : nexacro.FontObject("bold 12px/normal Gulim"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #e0002a"),
								"color" : nexacro.ColorObject("#555555"),
								"font" : nexacro.FontObject("bold 12px/normal Gulim"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #e0002a")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #e0002a")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #e0002a")
							}
						}
					},
					"btn_WF_btnSearch" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #e0002a"),
								"color" : nexacro.ColorObject("#555555"),
								"font" : nexacro.FontObject("bold 12px/normal Gulim"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #e0002a"),
								"color" : nexacro.ColorObject("#555555"),
								"font" : nexacro.FontObject("bold 12px/normal Gulim"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #e0002a")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #e0002a")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #e0002a")
							}
						}
					},
					"btn_WF_btnExp" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #e0002a"),
								"color" : nexacro.ColorObject("#555555"),
								"font" : nexacro.FontObject("bold 12px/normal Gulim"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 4px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #e0002a"),
								"color" : nexacro.ColorObject("#555555"),
								"font" : nexacro.FontObject("bold 12px/normal Gulim"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 4px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #e0002a")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #e0002a")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #e0002a")
							}
						}
					}
				}
			}
		},
		{
			"includeStatusMap" : true
		}
		);

		var imgcache = nexacro._getImageCacheMaps();
		
	};
}
)();
